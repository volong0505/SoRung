import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusComponentComponent } from './status-component.component';

describe('StatusComponentComponent', () => {
  let component: StatusComponentComponent;
  let fixture: ComponentFixture<StatusComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatusComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
