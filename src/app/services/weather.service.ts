import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from 'src/app/models/weather.model';
import { environment } from 'src/environments/environment.development';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }

  //methods
  getWeatherData(cityName : string): Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherAPIBaseUrl,{
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderKey)
      ,params: new HttpParams()
        .set('location',cityName)
        .set('u','c')
        .set('format','json')
    });
  }
}
