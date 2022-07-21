import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRoomConfirmComponent } from './book-room-confirm.component';

describe('BookRoomConfirmComponent', () => {
  let component: BookRoomConfirmComponent;
  let fixture: ComponentFixture<BookRoomConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookRoomConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRoomConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
