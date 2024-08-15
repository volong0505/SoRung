import { Component } from '@angular/core';

@Component({
  selector: 'lib-weighment-slip-costs-incurred',
  templateUrl: './weighment-slip-costs-incurred.component.html',
  styleUrl: './weighment-slip-costs-incurred.component.css',
})
export class WeighmentSlipCostsIncurredComponent {
  data = [
    {
      expense: 'Múc đường',
      amount: 2000
    },
    {
      expense: 'Cho xâu đợt 1',
      amount: 500
    },
    {
      expense: 'Cho xâu đợt 2',
      amount: 200
    },
  ]
}
