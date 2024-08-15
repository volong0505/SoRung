import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeighmentSlipCostsIncurredComponent } from './weighment-slip-costs-incurred.component';

describe('WeighmentSlipCostsIncurredComponent', () => {
  let component: WeighmentSlipCostsIncurredComponent;
  let fixture: ComponentFixture<WeighmentSlipCostsIncurredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeighmentSlipCostsIncurredComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeighmentSlipCostsIncurredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
