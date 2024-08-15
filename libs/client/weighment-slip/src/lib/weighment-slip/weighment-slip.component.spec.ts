import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeighmentSlipComponent } from './weighment-slip.component';

describe('WeighmentSlipComponent', () => {
  let component: WeighmentSlipComponent;
  let fixture: ComponentFixture<WeighmentSlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeighmentSlipComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeighmentSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
