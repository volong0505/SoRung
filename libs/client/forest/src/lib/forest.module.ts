import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForestListAddComponent } from './forest-list-add/forest-list-add.component';
import { ForestListComponent } from './forest-list/forest-list.component';
import { ForestComponent } from './forest/forest.component';

// NG-ZORRO
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpinModule } from 'ng-zorro-antd/spin';

// PIPES
import { PipesModule } from '@so-rung/client-pipes';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UiModule } from '@so-rung/client-ui';
import { ForestEffects } from './+state/forest.effects';
import * as fromForest from './+state/forest.reducer';
import { ForestService } from './forest.service';
import { ForestListEditComponent } from './forest-list-edit/forest-list-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ForestComponent,
    children: [
      {
        path: '',
        component: ForestListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),

    // NG-ZORRO
    NzTableModule,
    NzPaginationModule,
    NzDividerModule,
    NzIconModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzButtonModule,
    NzDrawerModule,
    NzFormModule,
    NzSelectModule,
    NzGridModule,
    NzInputModule,
    NzDatePickerModule,
    NzRadioModule,
    NzSpinModule,

    //Pipes
    PipesModule,
    UiModule,

    // NGRX
    StoreModule.forFeature(
      fromForest.FOREST_FEATURE_KEY,
      fromForest.forestReducer
    ),
    EffectsModule.forFeature([ForestEffects]),
    
  ],
  declarations: [
    ForestComponent,
    ForestListComponent,
    ForestListAddComponent,
    ForestListEditComponent
  ],
  providers: [
    ForestService
    ]
})
export class ForestModule {}
