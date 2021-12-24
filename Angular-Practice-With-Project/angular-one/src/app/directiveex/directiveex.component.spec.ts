import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveexComponent } from './directiveex.component';

describe('DirectiveexComponent', () => {
  let component: DirectiveexComponent;
  let fixture: ComponentFixture<DirectiveexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
