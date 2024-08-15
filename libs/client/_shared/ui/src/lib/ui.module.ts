import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { StatusComponent } from './status-component/status-component.component';
import { TypeOfForestComponent } from './type-of-forest-component/type-of-forest-component.component';

@NgModule({
  imports: [CommonModule, NzTagModule],
  declarations: [StatusComponent, TypeOfForestComponent],
  exports: [StatusComponent, TypeOfForestComponent],
})
export class UiModule {}
