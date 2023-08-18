import { moocConfig } from '@contexts-mooc-shared/infraestructure/config'
import { MongoDBConfig } from '@contexts-shared-infraestructure/persistence/mongodb/MongoDBConfig'

class MongoDBConfigFactory {
  static createConfig(): MongoDBConfig {
    return moocConfig.mongodb
  }
}

export { MongoDBConfigFactory }
