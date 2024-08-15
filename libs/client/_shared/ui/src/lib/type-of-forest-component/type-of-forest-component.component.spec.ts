import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypeOfForestComponentComponent } from './type-of-forest-component.component';

describe('TypeOfForestComponentComponent', () => {
  let component: TypeOfForestComponentComponent;
  let fixture: ComponentFixture<TypeOfForestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeOfForestComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TypeOfForestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
