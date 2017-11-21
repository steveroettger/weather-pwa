import { Component, OnInit, HostListener } from '@angular/core';
import { WeatherService } from './weather.service';
import { Weather } from './weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

  public weather: Weather;
  public loading: boolean;
  public isOnline: boolean;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.loading = true;
    this.weatherService.getCurrentWeather().subscribe((weather) => {
      this.weather = weather;
      this.loading = false;
    }, (err) => {
      console.log(`Failed to get weather: ${err}`);
      this.loading = false;
    });
    this.isOnline = true
  }

  @HostListener('window:offline', ['$event'])
  offline(event) {
    this.isOnline = false;
  }

  @HostListener('window:online', ['$event'])
  online(event) {
    this.isOnline = true;
  }
}
