import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-ipocalendar',
  templateUrl: './ipocalendar.component.html',
  styleUrls: ['./ipocalendar.component.scss']
})
export class IpocalendarComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
