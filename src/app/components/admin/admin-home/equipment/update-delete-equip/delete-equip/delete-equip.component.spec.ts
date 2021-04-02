import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEquipComponent } from './delete-equip.component';

describe('DeleteEquipComponent', () => {
  let component: DeleteEquipComponent;
  let fixture: ComponentFixture<DeleteEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEquipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
