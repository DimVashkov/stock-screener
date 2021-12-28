import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { Earnings } from 'src/app/shared/interfaces/earnings';

@Injectable({
  providedIn: 'root'
})
export class EarningsApiService {
  earnings: Earnings[] = [];
  currentDate: Date = new Date();

  constructor(private http: HttpClient, private papa: Papa) {}

  load(): void {
    const url = "https://www.alphavantage.co/query?function=EARNINGS_CALENDAR&horizon=3month&apikey=4UL18G30I6HH4G3C";
    this.papa.parse( url, {
      download: true,
      delimiter: ',',
      header: true,
      complete: (results) => {
        this.earnings = <Earnings[]>results.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  get(): Earnings[] {
    if (this.earnings.length != 0) return this.earningsNext2Weeks(this.earnings);
    this.load();
    return this.earningsNext2Weeks(this.earnings);
  }

  earningsNext1Month(earnings: Earnings[]): Earnings[] {
    const monthFromNow = new Date();
    monthFromNow.setDate(this.currentDate.getDate() + 30);

    return earnings.filter((entry) => {
      return new Date(entry.reportDate).getTime() <= monthFromNow.getTime();
    })
  }

  earningsNext2Weeks(earnings: Earnings[]): Earnings[] {
    const twoWeeksFromNow = new Date();
    twoWeeksFromNow.setDate(this.currentDate.getDate() + 14);

    return earnings
      .filter((entry) => {
        return new Date(entry.reportDate)
          .getTime() <= twoWeeksFromNow.getTime();
      })
      .sort((a, b) => {
      return new Date (a.reportDate).getTime() -  new Date (b.reportDate).getTime();
      })
  }
}
