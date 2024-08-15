import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { NZ_I18N, vi_VN } from 'ng-zorro-antd/i18n';
import { ShellModule } from '@so-rung/shell';
import { ApiInterceptor, apiInterceptorProvider } from './shared/interceptor';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import vi from '@angular/common/locales/vi';

import { CommonModule, registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';

registerLocaleData(vi);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot(),
    
    ShellModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: vi_VN },
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useValue: new ApiInterceptor(environment.host),
      multi: true
    }
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}