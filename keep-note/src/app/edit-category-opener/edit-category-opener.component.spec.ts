import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategoryOpenerComponent } from './edit-category-opener.component';

describe('EditCategoryOpenerComponent', () => {
  let component: EditCategoryOpenerComponent;
  let fixture: ComponentFixture<EditCategoryOpenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCategoryOpenerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCategoryOpenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
