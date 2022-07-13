import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buchungs404Component } from './buchungs404.component';

describe('Buchungs404Component', () => {
  let component: Buchungs404Component;
  let fixture: ComponentFixture<Buchungs404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Buchungs404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Buchungs404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
