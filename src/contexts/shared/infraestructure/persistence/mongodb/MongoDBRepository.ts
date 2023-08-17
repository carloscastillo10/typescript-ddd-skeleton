import { AggregateRoot } from '@contexts-shared-domain/AggregateRoot'
import { Collection, MongoClient } from 'mongodb'

abstract class MongoDBRepository<T extends AggregateRoot> {
  private readonly _client: Promise<MongoClient>

  constructor(client: Promise<MongoClient>) {
    this._client = client
  }

  protected abstract collectionName(): string

  protected async client(): Promise<MongoClient> {
    return await this._client
  }

  protected async collectiion(): Promise<Collection> {
    return (await this.client()).db().collection(this.collectionName())
  }

  protected async persist(aggregateRoot: T): Promise<void> {
    const collectiion = await this.collectiion()
    const document = { ...aggregateRoot.toPrimitives(), id: undefined }
    await collectiion.insertOne(document)
  }
}

export { MongoDBRepository }
