import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveTableSuccessComponent } from './reserve-table-success.component';

describe('ReserveTableSuccessComponent', () => {
  let component: ReserveTableSuccessComponent;
  let fixture: ComponentFixture<ReserveTableSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveTableSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveTableSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
