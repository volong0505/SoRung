import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-forest-list-detail',
  templateUrl: './forest-list-detail.component.html',
  styleUrl: './forest-list-detail.component.css',
})
export class ForestListDetailComponent {

  visible = false;


  open(): void {
    this.visible = true; 
    // if (this.id)  this.loadDetail()
  }

  close(): void {
    this.visible = false;
  }

}
