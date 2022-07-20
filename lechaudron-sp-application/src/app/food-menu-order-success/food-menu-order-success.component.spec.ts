import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMenuOrderSuccessComponent } from './food-menu-order-success.component';

describe('FoodMenuOrderSuccessComponent', () => {
  let component: FoodMenuOrderSuccessComponent;
  let fixture: ComponentFixture<FoodMenuOrderSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodMenuOrderSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodMenuOrderSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
