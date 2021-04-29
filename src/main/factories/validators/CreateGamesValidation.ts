import { Validation } from '@shared/protocols';
import { ValidationComposite, RequiredFieldValidation } from '@shared/helpers/validators';

export const makeCreateGamesValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for(const field of ['name', 'description', 'thumb', 'price', 'platforms_id']) {
    validations.push(new RequiredFieldValidation(field));
  }
  return new ValidationComposite(validations);
}