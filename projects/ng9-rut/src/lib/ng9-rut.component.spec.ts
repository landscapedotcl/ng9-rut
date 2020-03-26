import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng9RutComponent } from './ng9-rut.component';

describe('Ng9RutComponent', () => {
  let component: Ng9RutComponent;
  let fixture: ComponentFixture<Ng9RutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng9RutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng9RutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
