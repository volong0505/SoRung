import { Component, Input } from '@angular/core';
@Component({
  selector: 'lib-weighment-slip-edit',
  templateUrl: './weighment-slip-edit.component.html',
  styleUrl: './weighment-slip-edit.component.css',
})
export class WeighmentSlipEditComponent {
  @Input() data!: any[];
  data_fake = data;
  isLoading = false;

  constructor(){}

  addRecord(){
    const id = this.data_fake.length > 0 ? this.data_fake[this.data_fake.length - 1].id + 1 : 0;
     this.data_fake.push({
       id: id,
       date: new Date(),
       type: 'GIẤY',
       weight: 0,
       price: 0,
       money: 0,
       batch: 0,
       cuoc_xau: 0,
       cuoc_xe: 0,
       already_paid: false,
       note: ''
     })
  }

  removeRecord(id: number) {
    if (this.data_fake.length) {
      this.data_fake = this.data_fake.filter(e => e.id != id)
    }
  }
}

type WeighmentSlip_ItemDto = {
  id: number,
  date: Date,
  type: string,
  weight: number,
  price: number,
  money: number,
  batch: number,
  cuoc_xau: number,
  cuoc_xe: number,
  already_paid: boolean,
  note: string,
};

// const data: WeighmentSlip_ItemDto[] = [
//   {
//     id: 1,
//     date: new Date('06/06/2024'),
//     type: 'GIẤY',
//     weight: 10960,
//     price: 11.4,
//     money: 12494,
//     batch: 0,
//     cuoc_xau: 0,
//     cuoc_xe: 0,
//     already_paid: false,
//     note: ''
//   },
//   {
//     id: 2,
//     date: new Date('06/06/2024'),
//     type: 'BALLET',
//     weight: 10860,
//     price: 11.5,
//     money: 12830,
//     batch: 0,
//     cuoc_xau: 0,
//     cuoc_xe: 0,
//     already_paid: false,
//     note: ''
//   },
//   {
//     id: 3,
//     date: new Date('06/06/2024'),
//     type: 'GIẤY',
//     weight: 11300,
//     price: 11.4,
//     money: 12882,
//     batch: 0,
//     cuoc_xau: 0,
//     cuoc_xe: 0,
//     already_paid: false,
//     note: ''
//   },
//   {
//     id: 4,
//     date: new Date('06/06/2024'),
//     type: 'BALLET',
//     weight: 3270,
//     price: 11.4,
//     money: 3761,
//     batch: 0,
//     cuoc_xau: 0,
//     cuoc_xe: 0,
//     already_paid: false,
//     note: ''
//   }
// ]

const data: WeighmentSlip_ItemDto[] = []
