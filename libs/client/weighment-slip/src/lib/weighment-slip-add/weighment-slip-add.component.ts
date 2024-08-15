import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'lib-weighment-slip-add',
  templateUrl: './weighment-slip-add.component.html',
  styleUrl: './weighment-slip-add.component.css',
})
export class WeighmentSlipAddComponent {
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

  constructor(
    private fb: NonNullableFormBuilder,
  ) {

  }

  save() {
    alert('work')
  }
}
