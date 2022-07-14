import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TischSuccessComponent } from './tisch-success.component';

describe('TischSuccessComponent', () => {
  let component: TischSuccessComponent;
  let fixture: ComponentFixture<TischSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TischSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TischSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
