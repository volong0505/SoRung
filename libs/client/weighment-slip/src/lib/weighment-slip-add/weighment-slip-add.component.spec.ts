import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeighmentSlipAddComponent } from './weighment-slip-add.component';

describe('WeighmentSlipAddComponent', () => {
  let component: WeighmentSlipAddComponent;
  let fixture: ComponentFixture<WeighmentSlipAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeighmentSlipAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeighmentSlipAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
