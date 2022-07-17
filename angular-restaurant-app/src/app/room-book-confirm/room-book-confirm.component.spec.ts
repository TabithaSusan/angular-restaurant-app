import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBookConfirmComponent } from './room-book-confirm.component';

describe('RoomBookConfirmComponent', () => {
  let component: RoomBookConfirmComponent;
  let fixture: ComponentFixture<RoomBookConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomBookConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomBookConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
