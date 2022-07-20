import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMenuOrderKitchenTooFullComponent } from './food-menu-order-kitchen-too-full.component';

describe('FoodMenuOrderKitchenTooFullComponent', () => {
  let component: FoodMenuOrderKitchenTooFullComponent;
  let fixture: ComponentFixture<FoodMenuOrderKitchenTooFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodMenuOrderKitchenTooFullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodMenuOrderKitchenTooFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
