import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeexComponent } from './attributeex.component';

describe('AttributeexComponent', () => {
  let component: AttributeexComponent;
  let fixture: ComponentFixture<AttributeexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
