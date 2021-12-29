import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsButtonComponent } from './components/buttons/details-button/details-button.component';
import { TradingviewButtonComponent } from './components/buttons/tradingview-button/tradingview-button.component';
import { DividerComponent } from './components/divider/divider.component';



@NgModule({
  declarations: [
    DetailsButtonComponent,
    TradingviewButtonComponent,
    DividerComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DividerComponent
  ]
})
export class SharedModule { }
