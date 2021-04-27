import { RequiredFieldValidation, ValidationComposite } from '@shared/helpers/validators';
import { Validation } from '@shared/protocols';

export const makeCreateStoresValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  for(const field of ['name', 'latitude', 'longitude', 'games_id']){
    validations.push(new RequiredFieldValidation(field));
  }
  return new ValidationComposite(validations);
}