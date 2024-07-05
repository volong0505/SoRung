import { RouterModule, Routes } from '@angular/router';
import { RecordsComponent } from './records/records.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsListComponent } from './records-list/records-list.component';


import { NzTableModule } from 'ng-zorro-antd/table';

const routes: Routes = [
    {
        path: '',
        component: RecordsComponent,
        children: [
            {
                path: '',
                component: RecordsListComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),

        // NG-ZORRO
        NzTableModule
    ],
    declarations: [
        RecordsComponent,
        RecordsListComponent
    ]
})
export class RecordsModule {}