import { Component } from '@angular/core';

@Component({
  selector: 'lib-weighment-slip',
  templateUrl: './weighment-slip.component.html',
  styleUrl: './weighment-slip.component.css',
})
export class WeighmentSlipComponent {
  updateMode: boolean = false;

  data = [
    {
      id: '1',
      date: '06/06/2024',
      type: 'GIẤY',
      weight: 10960,
      price: 11.4,
      money: 12494,
      batch: 1,
      cuoc_xau: 0.22,
      cuoc_xe: 0.9,
      already_paid: true,
    },
    {
      id: '2',
      date: '06/06/2024',
      type: 'GIẤY',
      weight: 10960,
      price: 11.4,
      money: 12494,
      batch: 1,
      cuoc_xau: 0.22,
      cuoc_xe: 0.9,
      already_paid: true,
    },
    {
      id: '3',
      date: '06/06/2024',
      type: 'BALLET',
      weight: 10960,
      price: 11.4,
      money: 12494,
      batch: 1,
      cuoc_xau: 0.22,
      cuoc_xe: 0.9,
      already_paid: true,
    },
    {
      id: '4',
      date: '06/06/2024',
      type: 'BALLET',
      weight: 10960,
      price: 11.4,
      money: 12494,
      batch: 1,
      cuoc_xau: 0.22,
      cuoc_xe: 0.9,
      already_paid: true,
    },
    {
      id: '5',
      date: '07/06/2024',
      type: 'GIẤY',
      weight: 10960,
      price: 11.4,
      money: 12494,
      batch: 1,
      cuoc_xau: 0.22,
      cuoc_xe: 0.9,
      already_paid: true,
    },
    {
      id: '6',
      date: '07/06/2024',
      type: 'GIẤY',
      weight: 10960,
      price: 11.4,
      money: 12494,
      batch: 1,
      cuoc_xau: 0.22,
      cuoc_xe: 0.9,
      already_paid: false
    },
    {
      id: '8',
      date: '08/06/2024',
      type: 'GIẤY',
      weight: 10960,
      price: 11.4,
      money: 12494,
      batch: 1,
      cuoc_xau: 0.22,
      cuoc_xe: 0.9,
      already_paid: false
    },
    {
      id: '9',
      date: '08/06/2024',
      type: 'GIẤY',
      weight: 10960,
      price: 11.4,
      money: 12494,
      batch: 2,
      cuoc_xau: 0.22,
      cuoc_xe: 0.9,
      already_paid: false
    },
    {
      id: '10',
      date: '06/06/2024',
      type: 'GIẤY',
      weight: 10960,
      price: 11.4,
      money: 12494,
      batch: 2,
      cuoc_xau: 0.22,
      cuoc_xe: 0.9,
      already_paid: false
    },
  ]

  updateModeOn() {
    this.updateMode = true
  }
  
  updateModeOff() {
    this.updateMode = false
  }
}
