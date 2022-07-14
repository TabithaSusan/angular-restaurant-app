import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bestellvorgang404Component } from './bestellvorgang404.component';

describe('Bestellvorgang404Component', () => {
  let component: Bestellvorgang404Component;
  let fixture: ComponentFixture<Bestellvorgang404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bestellvorgang404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bestellvorgang404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
