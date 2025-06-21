import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors, AbstractControl } from '@angular/forms';
import { rutValidate } from './rut-helpers';

export const rutValidator = (c: AbstractControl): ValidationErrors | null => {
  if (!c.value) {
    return null;
  }
  return rutValidate(c.value) ? null : { invalidRut: true };
};

export const RUT_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RutValidator),
  multi: true,
};

@Directive({
  selector: '[ngValidateRut]',
  providers: [RUT_VALIDATOR],
})
export class RutValidator implements Validator {
  public validate(c: AbstractControl): ValidationErrors | null {
    return rutValidator(c);
  }
}
