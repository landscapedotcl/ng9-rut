import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule, FormControl, NgModel, UntypedFormBuilder, Validators, UntypedFormGroup } from '@angular/forms';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { RutValidator } from './rut.validator';
import { newEvent } from '../testing';
import { Ng9RutModule } from './ng9-rut.module';

@Component({
    template: `
    <form [formGroup]="reactiveForm" (ngSubmit)="onSubmit(reactiveForm)">
    <label for="rut">RUT</label>
    <input type="text" id="reactiveRut" placeholder="Ingresa el RUT" [formControl]="reactiveForm.controls.rut" formatRut>
    </form>
    `,
})
class TestReactiveFormComponent {
    public reactiveForm: UntypedFormGroup;
    public user: any = {
        rut: '',
    };
    constructor(fb: UntypedFormBuilder, rutValidator: RutValidator) {
        this.reactiveForm = fb.group({
            rut: ['30972198', [Validators.required, rutValidator]]
        });
    }
}

describe('RutValidator: ReactiveForms', () => {

    let fixture: ComponentFixture<TestReactiveFormComponent>;
    let input: DebugElement;
    let nativeInput: HTMLInputElement;
    let component: TestReactiveFormComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TestReactiveFormComponent],
            imports: [FormsModule, ReactiveFormsModule, Ng9RutModule],
        }).compileComponents();
        
        fixture = TestBed.createComponent(TestReactiveFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // it('should parse valid RUTs as valid RF', () => {
    //     nativeInput.value = '7.618.285-K';
    //     nativeInput.dispatchEvent(newEvent('input'));
    //     fixture.detectChanges();
    //     // expect(ngModel.valid).toBe(true);
    // });

});