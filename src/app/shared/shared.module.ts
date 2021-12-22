import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsButtonComponent } from './components/buttons/details-button/details-button.component';
import { TradingviewButtonComponent } from './components/buttons/tradingview-button/tradingview-button.component';



@NgModule({
  declarations: [
    DetailsButtonComponent,
    TradingviewButtonComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
