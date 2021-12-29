import { Component, Input, OnInit } from '@angular/core';
import { EarningsApiService } from 'src/app/core/services/http/earnings-api.service';
import { Earnings } from 'src/app/shared/interfaces/earnings';

@Component({
  selector: 'app-earnings-list',
  templateUrl: './earnings-list.component.html',
  styleUrls: ['./earnings-list.component.scss']
})
export class EarningsListComponent implements OnInit {
  @Input() classNames:string = '';
  @Input() data: any = [];
  @Input() headers: any = [];

  constructor() { }

   ngOnInit(): void {

  }

}
