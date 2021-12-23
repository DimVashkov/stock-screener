import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/shared/interfaces/stock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  stock: Stock | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  receiveSelectedStock($event: any): void {
    console.log('receiving event:', $event);
    this.stock = $event;
  }
}
