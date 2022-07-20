import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveTableConfirmComponent } from './reserve-table-confirm.component';

describe('ReserveTableConfirmComponent', () => {
  let component: ReserveTableConfirmComponent;
  let fixture: ComponentFixture<ReserveTableConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveTableConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveTableConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
