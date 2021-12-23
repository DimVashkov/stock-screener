import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EarningsComponent } from './earnings.component';

const routes: Routes = [
  { path: '', component: EarningsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EarningsRoutingModule {}
