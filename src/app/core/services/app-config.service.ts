import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private appConfig: any;

  constructor(private http: HttpClient) { }

  loadAppConfig() {
    return this.http
      .get('/assets/config.json')
      .subscribe(data => {
        this.appConfig = data;
      });
  }

  get alphaApiKey(): string {
    if (!this.appConfig) {
      throw Error('Config file not loaded');
    }
    return this.appConfig.alphaApiKey;
  }

  get yahooApiKey(): string {
    if (!this.appConfig) {
      throw Error('Config file not loaded');
    }
    return this.appConfig.yahooApiKey;
  }

  get polygonApiKey(): string {
    if (!this.appConfig) {
      throw Error('Config file not loaded');
    }
    return this.appConfig.polygonApiKey;
  }

  get alphaApiUrl(): string {
    if (!this.appConfig) {
      throw Error('Config file not loaded');
    }
    return this.appConfig.alphaApiUrl;
  }

  get yahooApiUrl(): string {
    if (!this.appConfig) {
      throw Error('Config file not loaded');
    }
    return this.appConfig.yahooApiUrl;
  }

  get polygonApiUrl(): string {
    if (!this.appConfig) {
      throw Error('Config file not loaded');
    }
    return this.appConfig.polygonApiUrl;
  }
}
