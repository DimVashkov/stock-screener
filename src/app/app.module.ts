import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IpocalendarComponent } from './modules/ipocalendar/ipocalendar.component';
import { EconomicIndicatorsComponent } from './modules/economic-indicators/economic-indicators.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    IpocalendarComponent,
    EconomicIndicatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
