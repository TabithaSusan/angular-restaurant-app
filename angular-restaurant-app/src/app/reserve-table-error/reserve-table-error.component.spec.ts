import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveTableErrorComponent } from './reserve-table-error.component';

describe('ReserveTableErrorComponent', () => {
  let component: ReserveTableErrorComponent;
  let fixture: ComponentFixture<ReserveTableErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveTableErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveTableErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
