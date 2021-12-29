import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { EarningsApiService } from 'src/app/core/services/http/earnings-api.service';
import { Earnings } from 'src/app/shared/interfaces/earnings';

@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.component.html',
  styleUrls: ['./earnings.component.scss']
})
export class EarningsComponent implements OnInit {
  earnings: Earnings[] = [];

  headers = [
    { key: 'symbol', label: 'Symbol' },
    { key: 'name', label: 'Name' },
    { key: 'reportDate', label: 'Report Date' },
    { key: 'fiscalDateEnding', label: 'Fiscal Date Ending' },
    { key: 'estimate', label: 'Estimate' },
  ];

  constructor(public auth: AuthService, private earnings_api: EarningsApiService) { }

  ngOnInit(): void {
    this.earnings = this.earnings_api.get();
  }

}
