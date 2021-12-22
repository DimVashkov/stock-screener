import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { DetailsButtonComponent } from './shared/components/buttons/details-button/details-button.component';
import { TradingviewButtonComponent } from './shared/components/buttons/tradingview-button/tradingview-button.component';
import { IpocalendarComponent } from './modules/ipocalendar/ipocalendar.component';
import { EconomicIndicatorsComponent } from './modules/economic-indicators/economic-indicators.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    DetailsButtonComponent,
    TradingviewButtonComponent,
    IpocalendarComponent,
    EconomicIndicatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
