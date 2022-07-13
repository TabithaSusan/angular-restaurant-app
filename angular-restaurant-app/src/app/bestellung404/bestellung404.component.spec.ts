import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bestellung404Component } from './bestellung404.component';

describe('Bestellung404Component', () => {
  let component: Bestellung404Component;
  let fixture: ComponentFixture<Bestellung404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bestellung404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bestellung404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
