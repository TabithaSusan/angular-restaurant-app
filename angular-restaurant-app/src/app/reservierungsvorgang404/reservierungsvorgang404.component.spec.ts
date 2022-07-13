import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reservierungsvorgang404Component } from './reservierungsvorgang404.component';

describe('Reservierungsvorgang404Component', () => {
  let component: Reservierungsvorgang404Component;
  let fixture: ComponentFixture<Reservierungsvorgang404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reservierungsvorgang404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reservierungsvorgang404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
