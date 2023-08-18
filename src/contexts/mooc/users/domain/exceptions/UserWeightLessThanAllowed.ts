import { InvalidArgumentError } from '@contexts-shared-domain/exceptions/InvalidArgumentError'

class UserWeightLessThanAllowed extends InvalidArgumentError {}

export { UserWeightLessThanAllowed }
