import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IpocalendarComponent } from './modules/ipocalendar/ipocalendar.component';
import { EconomicIndicatorsComponent } from './modules/economic-indicators/economic-indicators.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { AppConfigService } from './core/services/app-config.service';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    IpocalendarComponent,
    EconomicIndicatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HomeModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-u9zglyrg.us.auth0.com',
      clientId: 'P1z4wKvwRl0bVALfueczJQ2JH4V2hCTl'
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [AppConfigService],
      useFactory: (appConfigService: AppConfigService) => {
        return () => {
          return appConfigService.loadAppConfig();
        };
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
