import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodOrderCartComponent } from './food-order-cart.component';

describe('FoodOrderCartComponent', () => {
  let component: FoodOrderCartComponent;
  let fixture: ComponentFixture<FoodOrderCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodOrderCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodOrderCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
