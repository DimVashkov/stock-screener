import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarningsRoutingModule } from './earnings-routing.module';

import { EarningsListComponent } from './earnings-list/earnings-list.component';
import { EarningsImportantComponent } from './earnings-important/earnings-important.component';
import { EarningsComponent } from './earnings.component';



@NgModule({
  declarations: [
    EarningsListComponent,
    EarningsImportantComponent,
    EarningsComponent
  ],
  imports: [
    CommonModule,
    EarningsRoutingModule
  ]
})
export class EarningsModule { }
