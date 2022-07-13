import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reservierung404Component } from './reservierung404.component';

describe('Reservierung404Component', () => {
  let component: Reservierung404Component;
  let fixture: ComponentFixture<Reservierung404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reservierung404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reservierung404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
