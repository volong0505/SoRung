import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-weighment-slip-edit',
  templateUrl: './weighment-slip-edit.component.html',
  styleUrl: './weighment-slip-edit.component.css',
})
export class WeighmentSlipEditComponent {
  @Input() data!: any[];
  isLoading = false;
  new_meighment_slip = {
    date: null,
    type: null,
    weight: null,
    price: null,
    money: null,
    batch: null,
    cuoc_xau: null,
    cuoc_xe: null,
    already_paid: null,
    note: null,
  }
}
