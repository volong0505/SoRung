import { RouterModule, Routes } from '@angular/router';
import { RecordsComponent } from './records/records.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsListComponent } from './records-list/records-list.component';
import { RecordsListAddComponent } from './records-list-add/records-list-add.component';

// NG-ZORRO
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

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
        NzTableModule,
        NzPaginationModule
    ],
    declarations: [
        RecordsComponent,
        RecordsListComponent,
        RecordsListAddComponent
    ]
})
export class RecordsModule {}