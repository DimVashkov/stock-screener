import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EconomicIndicatorsComponent } from './economic-indicators.component';

const routes: Routes = [
  { path: '', component: EconomicIndicatorsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EconomicIndicatorsRoutingModule { }
