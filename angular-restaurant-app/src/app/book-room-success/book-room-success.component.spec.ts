import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRoomSuccessComponent } from './book-room-success.component';

describe('BookRoomSuccessComponent', () => {
  let component: BookRoomSuccessComponent;
  let fixture: ComponentFixture<BookRoomSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookRoomSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRoomSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
