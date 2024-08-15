import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-type-of-forest-component',
  templateUrl: './type-of-forest-component.component.html',
  styleUrl: './type-of-forest-component.component.css',
})
export class TypeOfForestComponent {

  @Input() type_of_forest = '';

}
