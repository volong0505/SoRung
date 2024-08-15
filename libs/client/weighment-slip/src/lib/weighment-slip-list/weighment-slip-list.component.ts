import { Component } from '@angular/core';

@Component({
  selector: 'lib-weighment-slip-list',
  templateUrl: './weighment-slip-list.component.html',
  styleUrl: './weighment-slip-list.component.css',
})
export class WeighmentSlipListComponent {
  isLoading = false;
  data = data;
  editId: string | null = null;

  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }
}

 
const data = [
  {
    batch: 1,
    weight_total: 104175,
    total_money: 119612,
    xau: 23045,
    xe: 9428,
    weight_slip_length: 4,
    weight_slip: [
      {
        id: '1',
        date: '06/06/2024',
        type: 'GIẤY',
        weight: 10960,
        price: 11.4,
        money: 12494,
    
      },
      {
        id: '2',
        date: '06/06/2024',
        type: 'BALLET',
        weight: 10860,
        price: 11.5,
        money: 12830,
      
      },
      {
        id: '3',
        date: '07/06/2024',
        type: 'GIẤY',
        weight: 11300,
        price: 11.4,
        money: 12882,
    
      },
      {
        id: '4',
        date: '07/06/2024',
        type: 'BALLET',
        weight: 3270,
        price: 11.4,
        money: 3761,
     
      }
    ]
  },
  {
    batch: 2,
    weight_total: 104175,
    total_money: 119612,
    xau: 23045,
    xe: 9428,
    weight_slip_length: 4,
    weight_slip: [
      {
        id: '5',
        date: '06/06/2024',
        type: 'GIẤY',
        weight: 10960,
        price: 11.4,
        money: 12494,
    
      },
      {
        id: '6',
        date: '06/06/2024',
        type: 'BALLET',
        weight: 10860,
        price: 11.5,
        money: 12830,
      
      },
      {
        id: '7',
        date: '07/06/2024',
        type: 'GIẤY',
        weight: 11300,
        price: 11.4,
        money: 12882,
    
      },
      {
        id: '8',
        date: '07/06/2024',
        type: 'BALLET',
        weight: 3270,
        price: 11.4,
        money: 3761,
     
      }
    ]
  }
]