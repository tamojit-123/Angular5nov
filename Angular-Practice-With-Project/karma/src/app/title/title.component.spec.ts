import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleComponent } from './title.component';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should correctly render the passed @input value', ()=>{
    component.message="Enter a new title";
    fixture.detectChanges();
    const compiled=fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toBe('Enter a new title')
  });
  it('should correctly @Output value of text input in component', () => {
    spyOn(component.changeTitleEvent, 'emit'); // 1
    const button = fixture.nativeElement.querySelector('button');
    fixture.nativeElement.querySelector('input').value = 'A new title'; // 2
    const inputText = fixture.nativeElement.querySelector('input').value;
    
    button.click(); // 3
    fixture.detectChanges();
  
    expect(component.changeTitleEvent.emit).toHaveBeenCalledWith(inputText); // 4
  });
});
