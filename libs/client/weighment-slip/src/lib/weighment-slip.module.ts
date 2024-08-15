import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { WeighmentSlipComponent } from "./weighment-slip/weighment-slip.component";
import { WeighmentSlipListComponent } from "./weighment-slip-list/weighment-slip-list.component";
import { WeighmentSlipAddComponent } from "./weighment-slip-add/weighment-slip-add.component";

// ng-zorro
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSwitchModule } from 'ng-zorro-antd/switch'

import { WeighmentSlipCostsIncurredComponent } from "./weighment-slip-costs-incurred/weighment-slip-costs-incurred.component";
import { WeighmentSlipStatisticComponent } from "./weighment-slip-statistic/weighment-slip-statistic.component";
import { WeighmentSlipEditComponent } from "./weighment-slip-edit/weighment-slip-edit.component";

const routes: Routes = [
    {
        path: '',
        component: WeighmentSlipComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,

        // NG-ZORRO
        NzTableModule,
        NzFormModule,
        NzGridModule,
        NzInputModule,
        NzDatePickerModule,
        NzButtonModule,
        NzIconModule,
        NzSelectModule,
        NzPageHeaderModule,
        NzSpaceModule,
        NzSwitchModule

    ],
    declarations: [
        WeighmentSlipComponent,
        WeighmentSlipListComponent,
        WeighmentSlipAddComponent,
        WeighmentSlipEditComponent,
        WeighmentSlipCostsIncurredComponent,
        WeighmentSlipStatisticComponent
    ]
})
export class WeighmentSlipModule {}