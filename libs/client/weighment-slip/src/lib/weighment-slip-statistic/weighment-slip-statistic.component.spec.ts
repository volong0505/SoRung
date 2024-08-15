import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeighmentSlipStatisticComponent } from './weighment-slip-statistic.component';

describe('WeighmentSlipStatisticComponent', () => {
  let component: WeighmentSlipStatisticComponent;
  let fixture: ComponentFixture<WeighmentSlipStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeighmentSlipStatisticComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeighmentSlipStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
