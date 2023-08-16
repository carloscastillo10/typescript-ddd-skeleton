import { InvalidArgumentError } from '@contexts-shared-domain/value-object/InvalidArgumentError'

class UserAgeLessThanAllowed extends InvalidArgumentError {}

export { UserAgeLessThanAllowed }
