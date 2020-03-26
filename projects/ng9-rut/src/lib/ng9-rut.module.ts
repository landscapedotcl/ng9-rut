import { NgModule } from '@angular/core';
import { RutPipe } from './rut.pipe';
import { RutDirective } from './rut.directive';
import { RutValidator } from './rut.validator';
import { RutValueAccessor } from './rut-value-accessor';



@NgModule({
  declarations: [
    RutPipe,
    RutDirective,
    RutValidator,
    RutValueAccessor,
  ],
  providers: [
    RutValidator,
  ],
  exports: [
    RutPipe,
    RutDirective,
    RutValidator,
    RutValueAccessor,
  ],
})
export class Ng9RutModule { }
