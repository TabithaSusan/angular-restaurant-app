import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRoomErrorComponent } from './book-room-error.component';

describe('BookRoomErrorComponent', () => {
  let component: BookRoomErrorComponent;
  let fixture: ComponentFixture<BookRoomErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookRoomErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRoomErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
