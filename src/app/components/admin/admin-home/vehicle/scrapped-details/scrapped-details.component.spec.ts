import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrappedDetailsComponent } from './scrapped-details.component';

describe('ScrappedDetailsComponent', () => {
  let component: ScrappedDetailsComponent;
  let fixture: ComponentFixture<ScrappedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrappedDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrappedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
