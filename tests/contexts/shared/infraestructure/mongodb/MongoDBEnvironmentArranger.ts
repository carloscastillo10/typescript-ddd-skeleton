import { EnvironmentArranger } from '@test-contexts/shared/infraestructure/arranger/EnvironmentArranger'
import { Mongoose as MongoClient } from 'mongoose'

class MongoDBEnvironmentArranger extends EnvironmentArranger {
  private readonly _client: Promise<MongoClient>

  constructor(client: Promise<MongoClient>) {
    super()
    this._client = client
  }

  async arrange(): Promise<void> {
    await this.cleanDatabase()
  }

  async close(): Promise<void> {
    return await (await this.client()).connection.close()
  }

  protected async cleanDatabase(): Promise<void> {
    const models = await this.models()
    const client = await this.client()
    await Promise.all(models.map(model => client.models[model].deleteMany({})))
  }

  protected async client(): Promise<MongoClient> {
    return await this._client
  }

  protected async models(): Promise<string[]> {
    const client = await this.client()
    return client.modelNames()
  }
}

export { MongoDBEnvironmentArranger }
