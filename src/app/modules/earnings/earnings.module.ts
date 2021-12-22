import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule
  ]
})
export class EarningsModule { }
