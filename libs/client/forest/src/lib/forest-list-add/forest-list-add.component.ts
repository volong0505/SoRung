import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { ForestService } from '../forest.service';
import { ForestUpsertRequest } from '@so-rung/api-interfaces';

@Component({
  selector: 'lib-forest-list-add',
  templateUrl: './forest-list-add.component.html',
  styleUrl: './forest-list-add.component.css',
})
export class ForestListAddComponent {
  visible = false;
  @Output("reload") reload: EventEmitter<any> = new EventEmitter();

  validateForm: FormGroup<{
    forest_owner: FormControl<string>;
    forest_location: FormControl<string>;
    purchase_price: FormControl<number>;
    profit: FormControl<number>;
    purchase_date: FormControl<Date>;
    status: FormControl<string>;
    forest_type: FormControl<'KEO' | 'CAO SU'>;
    describe: FormControl<string>;
    labor_cost: FormControl<number>;
    transport_cost: FormControl<number>;
  }>

  constructor(
    private fb: NonNullableFormBuilder,
    private service: ForestService
    ) {
      this.validateForm = this.fb.group({
        forest_owner: [''],
        forest_location: [''],
        purchase_price: [0],
        profit: [0],
        purchase_date: [new Date],
        status: ['pending'],
        forest_type: 'KEO' as 'KEO' | 'CAO SU',
        describe: [''],
        labor_cost: [2.3],
        transport_cost: [1.3],
      });
    }

  open(): void {
    this.visible = true; 
  }

  close(): void {
    this.visible = false;
  }

  onSubmit() {
   this.save()
  }

  save() {
    const dto: ForestUpsertRequest = {
      forest_owner: this.validateForm.controls.forest_owner.value,
      forest_location: this.validateForm.controls.forest_location.value,
      purchase_price: this.validateForm.controls.purchase_price.value,
      profit: this.validateForm.controls.profit.value,
      purchase_date: this.validateForm.controls.purchase_date.value,
      status: this.validateForm.controls.status.value,
      forest_type: this.validateForm.controls.forest_type.value,
      describe: this.validateForm.controls.describe.value,
      labor_cost: this.validateForm.controls.labor_cost.value,
      transport_cost: this.validateForm.controls.transport_cost.value,
    }

    this.service.upsert(dto)
      .subscribe(e => {
        this.visible = false;
        this.reload.emit()
      })

  }
}
