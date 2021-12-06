import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeGridComponent } from './cafe-grid.component';

describe('CafeGridComponent', () => {
  let component: CafeGridComponent;
  let fixture: ComponentFixture<CafeGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafeGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
