/* eslint-disable @typescript-eslint/no-explicit-any */
import { AggregateRoot } from '@contexts-shared-domain/AggregateRoot'
import { Model, Models, Mongoose as MongoClient } from 'mongoose'

abstract class MongoDBRepository<T extends AggregateRoot> {
  private readonly _client: Promise<MongoClient>

  constructor(client: Promise<MongoClient>) {
    this._client = client
  }

  protected abstract modelName(): string

  protected async client(): Promise<MongoClient> {
    return await this._client
  }

  protected async model(): Promise<Model<any>> {
    const models: Models = (await this.client()).models
    return models[this.modelName()]
  }

  protected async persist(aggregateRoot: T): Promise<void> {
    const model = await this.model()
    const document = { ...aggregateRoot.toPrimitives(), id: undefined }
    await model.create(document)
  }
}

export { MongoDBRepository }
