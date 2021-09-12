import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacklistedUsersComponent } from './blacklisted-users.component';

describe('BlacklistedUsersComponent', () => {
  let component: BlacklistedUsersComponent;
  let fixture: ComponentFixture<BlacklistedUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlacklistedUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlacklistedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
