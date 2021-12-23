import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  stock: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  receiveSelectedStock($event: any): void {
    console.log('receiving event:', $event);
    this.stock = $event;
  }
}
