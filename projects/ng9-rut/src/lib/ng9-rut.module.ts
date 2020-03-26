import { NgModule } from '@angular/core';
import { RutPipe } from 'projects/ng9-rut/src/lib/rut.pipe';
import { RutDirective } from 'projects/ng9-rut/src/lib/rut.directive';
import { RutValidator } from 'projects/ng9-rut/src/lib/rut.validator';
import { RutValueAccessor } from 'projects/ng9-rut/src/lib/rut-value-accessor';



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
