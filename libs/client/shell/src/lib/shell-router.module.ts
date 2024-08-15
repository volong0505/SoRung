import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
      path: '',
      component: ShellComponent,
      children: [
        {
          path: '',
          redirectTo: 'danh-sach-rung',
          pathMatch: 'full'
        },
        {
          path: 'dashboard',
          loadChildren: () => import('@so-rung/dashboard').then(m => m.DashboardModule)
        },
        {
          path: 'danh-sach-rung',
          loadChildren: () => import('@so-rung/forest').then(m => m.ForestModule)
        },
        {
          path: 'phieu-can/:id',
          loadChildren: () => import('@so-rung/weighment-slip').then(m => m.WeighmentSlipModule)
        }
      ]
    },
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking'})
    ],
    exports: [
        RouterModule
    ]
})
export class ShellRouterModule {}