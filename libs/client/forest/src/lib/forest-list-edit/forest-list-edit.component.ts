import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { ForestGetDetailRequest, ForestGetDetailResponse, ForestListItem, ForestUpsertRequest } from '@so-rung/api-interfaces';
import { ForestService } from '../forest.service';
import { Store } from '@ngrx/store';
import { editForest, loadForestDetail } from '../+state/forest.actions';
import { selectDetailForest, selectForestList } from '../+state/forest.selectors';

@Component({
  selector: 'lib-forest-list-edit',
  templateUrl: './forest-list-edit.component.html',
  styleUrl: './forest-list-edit.component.css',
})
export class ForestListEditComponent {
  visible = false;
  detail?: ForestListItem | null = null;
  @Input() id!: string;
  @Output("reload") reload: EventEmitter<any> = new EventEmitter();


  validateForm!: FormGroup<{
    forest_owner: FormControl<string>;
    forest_location: FormControl<string>;
    purchase_price: FormControl<number>;
    profit: FormControl<number>;
    purchase_date: FormControl<Date>;
    status: FormControl<string>;
    forest_type: FormControl<'KEO' | 'CAO SU' | null>;
    describe: FormControl<string>;
    labor_cost: FormControl<number>;
    transport_cost: FormControl<number>;
  }>

  constructor(
    private fb: NonNullableFormBuilder,
    private store: Store,
    ) {
      this.validateForm = this.fb.group({
        forest_owner: [''],
        forest_location: [''],
        purchase_price: [0],
        profit: [0],
        purchase_date: [new Date],
        status: ['pending'],
        forest_type: 'KEO' as 'KEO' | 'CAO SU' | null,
        describe: [''],
        labor_cost: [2.3],
        transport_cost: [1.3],
      });
    }

  loadDetail() {
    this.store.select(selectForestList).subscribe(state => {
      this.detail = state.find(e => e.id == this.id);
    })
  this.setValueToForm()
  }

  setValueToForm() {
    this.validateForm.setValue({
      forest_owner: this.detail?.forest_owner || '',
      forest_location: this.detail?.forest_location || '',
      purchase_price: this.detail?.purchase_price || 0,
      profit: this.detail?.profit || 0,
      purchase_date: this.detail?.purchase_date || new Date,
      status: this.detail?.status || '',
      forest_type: this.detail?.forest_type || null,
      describe: this.detail?.describe || '', 
      labor_cost: this.detail?.labor_cost || 0,
      transport_cost: this.detail?.transport_cost || 0,
    });

  }

  open(): void {
    this.visible = true; 
    if (this.id)  this.loadDetail()
  }

  close(): void {
    this.visible = false;
  }

  onSubmit() {
   this.save()
  }

  save() {
    const dto: ForestUpsertRequest = {
      id: this.id,
      forest_owner: this.validateForm.controls.forest_owner.value,
      forest_location: this.validateForm.controls.forest_location.value,
      purchase_price: this.validateForm.controls.purchase_price.value,
      profit: this.validateForm.controls.profit.value,
      purchase_date: this.validateForm.controls.purchase_date.value,
      status: this.validateForm.controls.status.value,
      forest_type: this.validateForm.controls.forest_type.value as "KEO" | "CAO SU",
      describe: this.validateForm.controls.describe.value,
      labor_cost: this.validateForm.controls.labor_cost.value,
      transport_cost: this.validateForm.controls.transport_cost.value,
    }
    this.store.dispatch(editForest(dto));
    this.reload.emit()

  }
}

