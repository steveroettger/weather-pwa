import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather/weather.service';
import { LoaderComponent } from './loader/loader.component';
import { OfflineComponent } from './offline/offline.component';
import { AppRoutingModule } from './app-routing.module';
import { NotificationsComponent } from './notifications/notifications.component';
import { PageNotFoundComponent } from './pages/404/404.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    AboutComponent,
    ContactComponent,
    LoaderComponent,
    OfflineComponent,
    NotificationsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
