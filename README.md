Angular 9 RUT
=============

Fork de https://github.com/platanus/ng2-rut para funcionar bajo Angular 9 debido a librerías deprecadas.

Angular 9 library with several components to handle [Chilean RUT](https://en.wikipedia.org/wiki/National_identification_number#Chile) validation, cleaning and formatting.

## Installation

```bash
yarn add ng9-rut
# or
npm install ng9-rut --save
```

## Requirements

### Node.js Version Compatibility

Esta librería está diseñada para funcionar con **Node.js 12.x o superior**.

**Versiones soportadas:**
- **Mínimo:** Node.js 12.11.1
- **Recomendado:** Node.js 12.x - 16.x (para máxima compatibilidad con Angular 9)
- **Angular 9** (que usa esta librería) tiene soporte oficial hasta Node.js 16.x

**Nota importante:** Esta librería está basada en **Angular 9**, que es una versión antigua (lanzada en 2020). Para proyectos nuevos, se recomienda usar versiones más recientes de Angular que soporten Node.js más actuales.

### Version Compatibility

| lib version | angular | node | 
|------------------------|------------------------|------------------------|
| 0.1.1 | 9.1.0 - 15.x | 12.11.1 - 16.x |

**Nota:** Para versiones de Angular 16+ se requerirían actualizaciones en el código debido a cambios en las APIs de validación y forms.

## Usage

### Set-up:

The easiest way to use this library is to import Ng2Rut in your app's main module.

```typescript
import { NgModule } from '@angular/core';
import { Ng9RutModule } from 'ng9-rut';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  ...
  imports: [
    BrowserModule,
    Ng9RutModule
  ],
})
class DemoAppModule { }
```

See `./demo` folder for a fully working example.

### Using it:

ng9-rut exposes multiple features that can be used to perform input validation and formatting. Probably you want to use one of the following:

- `RutValidator`: Exposes the `validateRut` directive (to attach to models or inputs) and the RutValidator class to be used as `Validator` on reactive forms.
- `RutPipe`: Exposes the `RutPipe` pipe to format rut numbers on templates
- `RutDirective`: Exposes the `formatRut` directive to format RUT inputs.

#### RutValidator

##### Reactive forms

```typescript
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RutValidator } from 'ng9-rut';
export class DemoAppComponent {
  constructor (fb: FormBuilder, rutValidator: RutValidator) {
    this.reactiveForm = fb.group({
      rut: ['30972198', [Validators.required, rutValidator]]
    });
  }
}

```

##### Template Form
```html
<input [(ngModel)]="user.rut" name="rut" validateRut required>
```

#### RutPipe

```html
{{ user.rut }}
<!-- 30972198 -->
{{ user.rut | rut }}
<!-- 3.097.219-8 -->
```

#### formatRut (Directive)
```html
<input [(ngModel)]="user.rut" name="rut" formatRut required>
<!--
(on blur)
3.097.219-8

(on focus)
30972198
-->
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Credits

Esta lib fue actualizada en base al proyecto de los chicos de platanus.
https://github.com/platanus/ng2-rut

## License

Angular 2 RUT is © 2016 Platanus, spa. It is free software and may be redistributed under the terms specified in the LICENSE file.
