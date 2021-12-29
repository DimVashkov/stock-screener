import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsButtonComponent } from './components/buttons/details-button/details-button.component';
import { TradingviewButtonComponent } from './components/buttons/tradingview-button/tradingview-button.component';
import { DividerComponent } from './components/divider/divider.component';
import { ShortNumberCurrencyPipe } from './pipes/short-number-currency.pipe';
import { TimesDirective } from './directives/times.directive';



@NgModule({
  declarations: [
    DetailsButtonComponent,
    TradingviewButtonComponent,
    DividerComponent,
    ShortNumberCurrencyPipe,
    TimesDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DividerComponent,
    ShortNumberCurrencyPipe,
    TimesDirective
  ]
})
export class SharedModule { }
