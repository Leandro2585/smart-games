import { Validation } from '@shared/protocols';
import { ValidationComposite, RequiredFieldValidation } from '@shared/helpers/validators';

export const makeDetailsGameValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  validations.push(new RequiredFieldValidation('id'));
  return new ValidationComposite(validations);
}