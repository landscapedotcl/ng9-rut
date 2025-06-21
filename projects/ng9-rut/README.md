# ng9-rut

Angular 17+ library for Chilean RUT validation, formatting and handling.

## Features

- ✅ **RUT Validation**: Validate Chilean RUT numbers with proper algorithm
- ✅ **Auto-formatting**: Format RUT inputs automatically (focus/blur)
- ✅ **Pipe Support**: Format RUT numbers in templates
- ✅ **Reactive Forms**: Full support for Angular reactive forms
- ✅ **Template Forms**: Template-driven forms with validation
- ✅ **TypeScript**: Full TypeScript support with type definitions
- ✅ **Modern Angular**: Built for Angular 17+ with latest practices

## Quick Start

### 1. Install
```bash
npm install ng9-rut --save
```

### 2. Import Module
```typescript
import { Ng9RutModule } from 'ng9-rut';

@NgModule({
  imports: [Ng9RutModule]
})
export class AppModule { }
```

### 3. Use in Templates
```html
<!-- Auto-formatting directive -->
<input ngRut [(ngModel)]="rut">

<!-- Validation directive -->
<input ngValidateRut [(ngModel)]="rut">

<!-- Format with pipe -->
{{ rut | rut }}
```

## API Reference

### Directives

- **`ngRut`**: Auto-formats RUT on focus/blur
- **`ngValidateRut`**: Validates RUT format and check digit

### Pipes

- **`rut`**: Formats RUT number (e.g., "12345678K" → "12.345.678-K")

### Services

- **`RutValidator`**: Validator class for reactive forms

## Development

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.17.

### Build

Run `ng build ng9-rut` to build the project. The build artifacts will be stored in the `dist/` directory.

### Testing

Run `ng test ng9-rut` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Publishing

After building your library with `ng build ng9-rut`, go to the dist folder `cd dist/ng9-rut` and run `npm publish`.

## License

MIT License - see [LICENSE](../../LICENSE) file for details.
