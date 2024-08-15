import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeighmentSlipListComponent } from './weighment-slip-list.component';

describe('WeighmentSlipListComponent', () => {
  let component: WeighmentSlipListComponent;
  let fixture: ComponentFixture<WeighmentSlipListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeighmentSlipListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeighmentSlipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
