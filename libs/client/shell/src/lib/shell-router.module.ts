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
          redirectTo: 'records',
          pathMatch: 'full'
        },
        {
          path: 'dashboard',
          loadChildren: () => import('@so-rung/dashboard').then(m => m.DashboardModule)
        },
        {
          path: 'records',
          loadChildren: () => import('@so-rung/records').then(m => m.RecordsModule)
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