import { InvalidArgumentError } from '@contexts-shared-domain/value-object/InvalidArgumentError'

class UserWeightLessThanAllowed extends InvalidArgumentError {}

export { UserWeightLessThanAllowed }
