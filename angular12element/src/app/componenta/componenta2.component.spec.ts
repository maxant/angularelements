import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componenta2Component } from './componenta2.component';

describe('ComponentaComponent', () => {
  let component: Componenta2Component;
  let fixture: ComponentFixture<Componenta2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componenta2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Componenta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
