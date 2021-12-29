import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-economic-indicators',
  templateUrl: './economic-indicators.component.html',
  styleUrls: ['./economic-indicators.component.scss']
})
export class EconomicIndicatorsComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
