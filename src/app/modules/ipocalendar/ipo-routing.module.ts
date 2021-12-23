import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IpocalendarComponent } from './ipocalendar.component';

const routes: Routes = [
  { path: '', component: IpocalendarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IpocalendarRoutingModule { }
