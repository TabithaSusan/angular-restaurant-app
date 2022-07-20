import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodOrderKitchenTooFullComponent } from './food-order-kitchen-too-full.component';

describe('FoodOrderKitchenTooFullComponent', () => {
  let component: FoodOrderKitchenTooFullComponent;
  let fixture: ComponentFixture<FoodOrderKitchenTooFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodOrderKitchenTooFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodOrderKitchenTooFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
