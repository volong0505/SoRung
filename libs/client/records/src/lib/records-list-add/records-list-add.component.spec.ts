import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecordsListAddComponent } from './records-list-add.component';

describe('RecordsListAddComponent', () => {
  let component: RecordsListAddComponent;
  let fixture: ComponentFixture<RecordsListAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordsListAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecordsListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
