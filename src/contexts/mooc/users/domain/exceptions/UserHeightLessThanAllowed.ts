import { InvalidArgumentError } from '@contexts-shared-domain/value-object/InvalidArgumentError'

class UserHeightLessThanAllowed extends InvalidArgumentError {}

export { UserHeightLessThanAllowed }
