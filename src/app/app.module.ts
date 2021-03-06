import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { interceptorConf } from './interceptor'

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module'
import { ViewsModule } from './views/views.module';
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'
import store from './store';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ViewsModule,
    HttpClientModule,
    StoreModule.forRoot(store),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [interceptorConf],
  bootstrap: [AppComponent]
})
export class AppModule { }
