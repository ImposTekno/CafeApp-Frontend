import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffDisplayComponent } from './staff-display.component';

describe('StaffDisplayComponent', () => {
  let component: StaffDisplayComponent;
  let fixture: ComponentFixture<StaffDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
