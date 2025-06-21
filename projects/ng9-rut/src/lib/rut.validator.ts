import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, UntypedFormControl } from '@angular/forms';
import { rutValidate } from './rut-helpers';

export function validateRutFactory(rutValidate: Function) {
  return (c: UntypedFormControl) => {    
    if (!c.value) {
      return null;
    }
    return rutValidate(c.value) ? null : { invalidRut: true };
  };
}

@Directive({
  selector: '[validateRut][ngModel],[validateRut][formControl]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => RutValidator), multi: true },
  ],
})
export class RutValidator {
  private validator: Function;
  
  constructor() {
    this.validator = validateRutFactory(rutValidate);
  }
  
  public validate(c: UntypedFormControl) {
    return this.validator(c);
  }
}
