import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMenuOrderErrorComponent } from './food-menu-order-error.component';

describe('FoodMenuOrderErrorComponent', () => {
  let component: FoodMenuOrderErrorComponent;
  let fixture: ComponentFixture<FoodMenuOrderErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodMenuOrderErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodMenuOrderErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
