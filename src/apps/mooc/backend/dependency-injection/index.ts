import { moocConfig } from '@contexts-mooc-shared/infraestructure/config'
import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection'

const container: ContainerBuilder = new ContainerBuilder()
const loader = new YamlFileLoader(container)
const env = moocConfig.env

loader.load(`${__dirname}/application_${env}.yaml`)

export { container }
