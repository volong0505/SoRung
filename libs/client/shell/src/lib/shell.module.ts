import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from "ng-zorro-antd/menu";
import { ShellComponent } from "./shell/shell.component";
import { ShellRouterModule } from "./shell-router.module";
import { provideHttpClient } from "@angular/common/http";

@NgModule({
    imports: [
        CommonModule,
        NzButtonModule,
        NzLayoutModule,
        NzMenuModule,
        NzIconModule,
        NzBreadCrumbModule,
        NzGridModule,
        ShellRouterModule,
    ],
    declarations: [
        ShellComponent
    ],
    providers: [
        provideHttpClient()
    ],
    exports: [
      ShellRouterModule
    ]
})
export class ShellModule {}