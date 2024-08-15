import { Component } from '@angular/core';

@Component({
  selector: 'lib-weighment-slip-statistic',
  templateUrl: './weighment-slip-statistic.component.html',
  styleUrl: './weighment-slip-statistic.component.css',
})
export class WeighmentSlipStatisticComponent {

  data = [
    {
      type: 'GIẤY',
      total_weight: 191400,
      price: 232160
    },
    {
      type: 'BALLET',
      total_weight: 76000,
      price: 80000
    },
    {
      type: 'VANH',
      total_weight: 0,
      price: 0
    },
  ]

}
