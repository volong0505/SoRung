import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForestListAddComponent } from './forest-list-add.component';

describe('ForestListAddComponent', () => {
  let component: ForestListAddComponent;
  let fixture: ComponentFixture<ForestListAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForestListAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ForestListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
