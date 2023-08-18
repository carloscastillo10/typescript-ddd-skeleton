import { InvalidArgumentError } from '@contexts-shared-domain/exceptions/InvalidArgumentError'

class UserAgeLessThanAllowed extends InvalidArgumentError {}

export { UserAgeLessThanAllowed }
