import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UInfoComponent } from './u-info.component';

describe('UInfoComponent', () => {
  let component: UInfoComponent;
  let fixture: ComponentFixture<UInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
