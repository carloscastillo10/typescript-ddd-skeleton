/* eslint-disable @typescript-eslint/no-explicit-any */
import { AggregateRoot } from '@contexts-shared-domain/AggregateRoot'
import { hash } from 'bcrypt'
import { Model, Mongoose as MongoClient, Schema } from 'mongoose'

abstract class MongoDBRepository<T extends AggregateRoot> {
  private readonly _client: Promise<MongoClient>

  constructor(client: Promise<MongoClient>) {
    this._client = client
  }

  protected abstract modelName(): string
  protected abstract schema(): Schema

  protected async client(): Promise<MongoClient> {
    return await this._client
  }

  protected async model(): Promise<Model<any>> {
    const client = await this.client()
    const models = client.modelNames()
    const modelName = this.modelName()

    if (models.includes(modelName)) {
      return client.models[modelName]
    }

    return client.connection.model(this.modelName(), this.schema())
  }

  protected async persist(id: string, password: string, aggregateRoot: T): Promise<void> {
    const model = await this.model()
    const encryptedPassword = await hash(password, 10)
    const document = { ...aggregateRoot.toPrimitives(), _id: id, id: undefined, password: encryptedPassword }
    await model.create(document)
  }
}

export { MongoDBRepository }
