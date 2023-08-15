import 'dotenv/config'
import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection'

const container: ContainerBuilder = new ContainerBuilder()
const loader = new YamlFileLoader(container)
const env = process.env.NODE_ENV ?? 'dev'

loader.load(`${__dirname}/application_${env}.yaml`)

export { container }
