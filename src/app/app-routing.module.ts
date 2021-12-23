import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./modules/home/home.module')
    .then( m => m.HomeModule)
  },
  {
    path: 'earnings',
    loadChildren: () => import('./modules/earnings/earnings.module')
      .then(m => m.EarningsModule)
  },
  {
    path: 'ipos',
    loadChildren: () => import('./modules/ipocalendar/ipocalendar.module')
      .then(m => m.IpocalendarModule)
  },
  {
    path: 'economic-data',
    loadChildren: () => import('./modules/economic-indicators/economic-indicators.module')
      .then(m => m.EconomicIndicatorsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
