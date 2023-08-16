import { MongoDBConfig } from '@contexts-shared-infraestructure/persistence/mongodb/MongoDBConfig'
import { Mongoose as MongoClient } from 'mongoose'

class MongoDBClientFactory {
  private static clients: Record<string, MongoClient> = {}

  static async createClient(contextName: string, config: MongoDBConfig): Promise<MongoClient> {
    let client = MongoDBClientFactory.getClient(contextName)

    if (client == null) {
      client = await MongoDBClientFactory.createAndConnectClient(config)
      MongoDBClientFactory.registerClient(client, contextName)
    }

    return client
  }

  private static getClient(contextName: string): MongoClient | null {
    return MongoDBClientFactory.clients[contextName]
  }

  private static async createAndConnectClient(config: MongoDBConfig): Promise<MongoClient> {
    const client = new MongoClient()
    await client.connect(config.url)

    return client
  }

  private static registerClient(client: MongoClient, contextName: string): void {
    MongoDBClientFactory.clients[contextName] = client
  }
}

export { MongoDBClientFactory }
