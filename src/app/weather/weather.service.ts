import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Weather } from './weather.model';

const WEATHER_URL = 'http://forecast.weather.gov/MapClick.php?lat=39.9526&lon=-75.1652&FcstType=json';
const CURRENT_WEATHER_IMG_URL = 'http://forecast.weather.gov/newimages/large/';

@Injectable()
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  public getCurrentWeather(): Observable<Weather> {

    return this.httpClient.get(WEATHER_URL).map((response: HttpResponse<any>) => {
      const data = response;
      return {
        location: data['currentobservation'].name,
        state: data['currentobservation'].state,
        latitude: data['currentobservation'].latitude,
        longitude: data['currentobservation'].longitude,
        date: data['currentobservation'].Date,
        temp: data['currentobservation'].Temp,
        weather: data['currentobservation'].Weather,
        weatherImgUrl: `${CURRENT_WEATHER_IMG_URL}${data['currentobservation'].Weatherimage}`
      };
    }, (err: HttpErrorResponse) => {
      let errorMsg: string;
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMsg = err.error.message;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMsg = `Weather service returned code ${err.status}, body was: ${err.error}`;
      }
      return Observable.throw(errorMsg);
    });
  }
}
