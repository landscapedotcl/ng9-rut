# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2025-06-21

### Added
- Angular 17 support with full migration from Angular 9
- ESLint configuration replacing deprecated TSLint
- Modern dependency injection using `inject()` function
- Comprehensive test coverage with all tests passing
- Library naming conventions with `ng` prefix for selectors
- Build and publish npm scripts
- Complete package metadata for npm publication

### Changed
- **BREAKING**: Directive selectors updated to use `ng` prefix:
  - `[formatRut]` → `[ngRut]`
  - `[validateRut]` → `[ngValidateRut]`
- Updated all dependencies to Angular 17 compatible versions
- Migrated from constructor injection to `inject()` function
- Updated TypeScript to 5.4.5
- Updated RxJS to 7.8.2
- Replaced TSLint with ESLint
- Updated zone.js to 0.14.x for Angular 17 compatibility

### Removed
- TSLint configuration and dependencies
- Protractor e2e testing setup
- Obsolete Angular 9 specific configurations
- Deprecated `whitelistedNonPeerDependencies` from ng-package.json

### Fixed
- Zone.js import paths in test files
- Build configuration for Angular 17
- All linting errors and warnings
- Test failures related to updated selectors
- Validator return types for proper TypeScript compliance

### Migration Guide
If upgrading from version 0.1.x:

1. Update your templates to use new directive selectors:
   ```html
   <!-- Before -->
   <input formatRut [(ngModel)]="rut">
   <input validateRut [(ngModel)]="rut">
   
   <!-- After -->
   <input ngRut [(ngModel)]="rut">
   <input ngValidateRut [(ngModel)]="rut">
   ```

2. Ensure you're using Angular 17+ in your project
3. Update your imports if needed (public API remains the same)

## [0.1.1] - Previous Release
- Initial Angular 9 support
- Basic RUT validation and formatting functionality 