import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarningsRoutingModule } from './earnings-routing.module';

import { EarningsListComponent } from './earnings-list/earnings-list.component';
import { EarningsImportantComponent } from './earnings-important/earnings-important.component';
import { EarningsComponent } from './earnings.component';
import { EarningsApiService } from 'src/app/core/services/http/earnings-api.service';



@NgModule({
  declarations: [
    EarningsListComponent,
    EarningsImportantComponent,
    EarningsComponent
  ],
  imports: [
    CommonModule,
    EarningsRoutingModule
  ],
  providers: [
    EarningsApiService
  ]
})
export class EarningsModule { }
