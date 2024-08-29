import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForestListDetailComponent } from './forest-list-detail.component';

describe('ForestListDetailComponent', () => {
  let component: ForestListDetailComponent;
  let fixture: ComponentFixture<ForestListDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForestListDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ForestListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
