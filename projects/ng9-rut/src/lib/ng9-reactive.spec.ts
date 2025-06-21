import { Component, inject } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Ng9RutService } from './ng9-rut.service';
import { RutValidator } from './rut.validator';

describe('Ng9RutReactiveForm', () => {
  @Component({
    template: `
      <form [formGroup]="form">
        <input type="text" formControlName="rut" ngRut>
      </form>
    `
  })
  class TestComponent {
    form: FormGroup;
    fb: FormBuilder = inject(FormBuilder);

    constructor() {
      this.form = this.fb.group({
        rut: ['', [Validators.required, new RutValidator().validate.bind(this)]]
      });
    }
  }

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [TestComponent, RutValidator],
      providers: [Ng9RutService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});