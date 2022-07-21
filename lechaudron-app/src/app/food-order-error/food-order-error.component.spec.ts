import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodOrderErrorComponent } from './food-order-error.component';

describe('FoodOrderErrorComponent', () => {
  let component: FoodOrderErrorComponent;
  let fixture: ComponentFixture<FoodOrderErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodOrderErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodOrderErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
