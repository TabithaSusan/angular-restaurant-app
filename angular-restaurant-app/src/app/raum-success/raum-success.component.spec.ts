import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaumSuccessComponent } from './raum-success.component';

describe('RaumSuccessComponent', () => {
  let component: RaumSuccessComponent;
  let fixture: ComponentFixture<RaumSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaumSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaumSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
