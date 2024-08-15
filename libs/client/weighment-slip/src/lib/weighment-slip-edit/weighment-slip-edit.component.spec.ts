import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeighmentSlipEditComponent } from './weighment-slip-edit.component';

describe('WeighmentSlipEditComponent', () => {
  let component: WeighmentSlipEditComponent;
  let fixture: ComponentFixture<WeighmentSlipEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeighmentSlipEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeighmentSlipEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
