import { Directive, ElementRef, Renderer2, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { rutFormat } from './rut-helpers';

export const RUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RutValueAccessor),
  multi: true,
};

@Directive({
  selector: '[ngRut]',
  host: {
    '(rutChange)': 'onChange($event)',
    '(blur)': 'onTouched($event)',
  },
  providers: [RUT_VALUE_ACCESSOR],
  exportAs: 'ngRut',
})
export class RutValueAccessor implements ControlValueAccessor {
  private renderer: Renderer2 = inject(Renderer2);
  private elementRef: ElementRef = inject(ElementRef);
  public onChange = (_: any) => { /*Empty*/ };
  public onTouched = () => { /*Empty*/ };

  constructor() {}

  public writeValue(value: any): void {
    const normalizedValue = rutFormat(value);
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', normalizedValue);
    this.onChange(normalizedValue);
  }

  public registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  public registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  setDisabledState?(isDisabled: boolean): void {
    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
  }
}
