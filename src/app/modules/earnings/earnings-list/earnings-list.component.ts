import { Component, OnInit } from '@angular/core';
import { EarningsApiService } from 'src/app/core/http/earnings-api.service';
import { Earnings } from 'src/app/shared/interfaces/earnings';

@Component({
  selector: 'app-earnings-list',
  templateUrl: './earnings-list.component.html',
  styleUrls: ['./earnings-list.component.scss']
})
export class EarningsListComponent implements OnInit {
  earnings: Earnings[] = [];
  constructor(private earnings_api:EarningsApiService) { }

  async ngOnInit(): Promise<void> {
    this.earnings = await this.earnings_api.get();
    console.log(this.earnings);
  }

}
