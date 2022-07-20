import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodOrderConfirmComponent } from './food-order-confirm.component';

describe('FoodOrderConfirmComponent', () => {
  let component: FoodOrderConfirmComponent;
  let fixture: ComponentFixture<FoodOrderConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodOrderConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodOrderConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
