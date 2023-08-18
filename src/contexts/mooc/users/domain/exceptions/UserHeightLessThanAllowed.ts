import { InvalidArgumentError } from '@contexts-shared-domain/exceptions/InvalidArgumentError'

class UserHeightLessThanAllowed extends InvalidArgumentError {}

export { UserHeightLessThanAllowed }
