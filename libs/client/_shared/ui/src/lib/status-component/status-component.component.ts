import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-status-component',
  templateUrl: './status-component.component.html',
  styleUrl: './status-component.component.css',
})
export class StatusComponent {
  
  @Input() status = '';

}
