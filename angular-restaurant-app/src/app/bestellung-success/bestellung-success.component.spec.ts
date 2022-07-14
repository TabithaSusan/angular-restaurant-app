import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestellungSuccessComponent } from './bestellung-success.component';

describe('BestellungSuccessComponent', () => {
  let component: BestellungSuccessComponent;
  let fixture: ComponentFixture<BestellungSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestellungSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestellungSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
