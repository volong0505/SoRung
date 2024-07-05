import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { NZ_I18N, vi_VN } from 'ng-zorro-antd/i18n';
import { ShellModule } from '@so-rung/shell';
import { apiInterceptorProvider } from './shared/interceptor';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ShellModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: vi_VN },
    apiInterceptorProvider(environment.host)
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}