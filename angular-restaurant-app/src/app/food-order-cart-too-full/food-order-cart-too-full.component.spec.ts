import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodOrderCartTooFullComponent } from './food-order-cart-too-full.component';

describe('FoodOrderCartTooFullComponent', () => {
  let component: FoodOrderCartTooFullComponent;
  let fixture: ComponentFixture<FoodOrderCartTooFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodOrderCartTooFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodOrderCartTooFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
