import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForestListEditComponent } from './forest-list-edit.component';

describe('ForestListEditComponent', () => {
  let component: ForestListEditComponent;
  let fixture: ComponentFixture<ForestListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForestListEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ForestListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
