import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveInqComponent } from './remove-inq.component';

describe('RemoveInqComponent', () => {
  let component: RemoveInqComponent;
  let fixture: ComponentFixture<RemoveInqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveInqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveInqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
