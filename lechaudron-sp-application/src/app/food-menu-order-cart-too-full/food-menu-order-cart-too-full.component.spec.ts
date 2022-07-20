import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMenuOrderCartTooFullComponent } from './food-menu-order-cart-too-full.component';

describe('FoodMenuOrderCartTooFullComponent', () => {
  let component: FoodMenuOrderCartTooFullComponent;
  let fixture: ComponentFixture<FoodMenuOrderCartTooFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodMenuOrderCartTooFullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodMenuOrderCartTooFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
