import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodOrderSuccessComponent } from './food-order-success.component';

describe('FoodOrderSuccessComponent', () => {
  let component: FoodOrderSuccessComponent;
  let fixture: ComponentFixture<FoodOrderSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodOrderSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodOrderSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
