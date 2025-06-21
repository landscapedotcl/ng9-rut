Angular 17 RUT
==============

Modern Angular 17+ library with several components to handle [Chilean RUT](https://en.wikipedia.org/wiki/National_identification_number#Chile) validation, cleaning and formatting.

Originally forked from [ng2-rut](https://github.com/platanus/ng2-rut) and fully updated to work with Angular 17+ and modern development practices.

## Installation

```bash
npm install ng9-rut --save
# or
yarn add ng9-rut
```

## Requirements

### Node.js Version Compatibility

This library is designed to work with **Node.js 18.x or higher**.

**Supported versions:**
- **Minimum:** Node.js 18.13.0
- **Recommended:** Node.js 20.x+ (for optimal performance with Angular 17)
- **Angular 17+** (which this library targets) officially supports Node.js 18.13.0 and higher

### Version Compatibility

| Library Version | Angular | Node.js | TypeScript |
|----------------|---------|---------|------------|
| 0.2.0+ | 17.0.0+ | 18.13.0+ | 5.4+ |
| 0.1.1 | 9.1.0 - 16.x | 12.11.1 - 16.x | 4.7+ |

## Usage

### Set-up:

The easiest way to use this library is to import `Ng9RutModule` in your app's main module.

```typescript
import { NgModule } from '@angular/core';
import { Ng9RutModule } from 'ng9-rut';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    Ng9RutModule
  ],
})
class AppModule { }
```

### Features:

ng9-rut exposes multiple features that can be used to perform input validation and formatting:

- **`RutValidator`**: Exposes the `ngValidateRut` directive (for template-driven forms) and the `RutValidator` class for reactive forms.
- **`RutPipe`**: Exposes the `rut` pipe to format RUT numbers in templates.
- **`RutDirective`**: Exposes the `ngRut` directive to format RUT inputs automatically.

#### RutValidator

##### Reactive Forms

```typescript
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RutValidator } from 'ng9-rut';
import { inject } from '@angular/core';

export class AppComponent {
  private fb = inject(FormBuilder);
  private rutValidator = inject(RutValidator);

  reactiveForm = this.fb.group({
    rut: ['30972198', [Validators.required, this.rutValidator.validate]]
  });
}
```

##### Template-Driven Forms
```html
<input [(ngModel)]="user.rut" name="rut" ngValidateRut required>
```

#### RutPipe

```html
{{ user.rut }}
<!-- 30972198 -->
{{ user.rut | rut }}
<!-- 3.097.219-8 -->
```

#### RutDirective (Auto-formatting)
```html
<input [(ngModel)]="user.rut" name="rut" ngRut required>
<!--
(on blur) → formats to: 3.097.219-8
(on focus) → clears to: 30972198
-->
```

### Complete Example

```typescript
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RutValidator } from 'ng9-rut';
import { inject } from '@angular/core';

@Component({
  selector: 'app-rut-example',
  template: `
    <div>
      <h3>Reactive Form</h3>
      <form [formGroup]="reactiveForm">
        <input formControlName="rut" placeholder="Enter RUT">
        <div *ngIf="reactiveForm.get('rut')?.invalid && reactiveForm.get('rut')?.touched">
          Invalid RUT
        </div>
      </form>
      
      <h3>Template Form with Auto-formatting</h3>
      <input [(ngModel)]="templateRut" ngRut ngValidateRut placeholder="Enter RUT">
      
      <h3>Display with Pipe</h3>
      <p>Formatted: {{ templateRut | rut }}</p>
    </div>
  `
})
export class RutExampleComponent {
  private fb = inject(FormBuilder);
  private rutValidator = inject(RutValidator);
  
  templateRut = '';
  
  reactiveForm = this.fb.group({
    rut: ['', [Validators.required, this.rutValidator.validate]]
  });
}
```

## Migration from v0.1.x

If you're upgrading from version 0.1.x, you need to update your directive selectors:

```html
<!-- Before (v0.1.x) -->
<input formatRut [(ngModel)]="rut">
<input validateRut [(ngModel)]="rut">

<!-- After (v0.2.0+) -->
<input ngRut [(ngModel)]="rut">
<input ngValidateRut [(ngModel)]="rut">
```

The pipe and programmatic API remain unchanged.

## Development

### Building the Library

```bash
npm run build:lib
```

### Running Tests

```bash
npm test
```

### Linting

```bash
npm run lint
```

### Publishing

```bash
npm run publish:lib
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for a detailed list of changes.

## Credits

This library was originally forked and updated from the excellent work by [Platanus](https://github.com/platanus/ng2-rut).

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
