import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmvUsersComponent } from './vmv-users.component';

describe('VmvUsersComponent', () => {
  let component: VmvUsersComponent;
  let fixture: ComponentFixture<VmvUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmvUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VmvUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
