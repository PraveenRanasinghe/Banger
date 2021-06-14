import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyViewMoreComponent } from './verify-view-more.component';

describe('VerifyViewMoreComponent', () => {
  let component: VerifyViewMoreComponent;
  let fixture: ComponentFixture<VerifyViewMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyViewMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyViewMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
