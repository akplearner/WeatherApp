import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'WeatherApp';
  weatherData?: WeatherData;
  cityName: string = 'Sunnyvale';

  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {
    this.getWeather(this.cityName);
    this.cityName = '';
  }

  onSubmitCity(){
    this.getWeather(this.cityName);
    this.cityName = '';
  }

  private getWeather(cityName: string){
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (respose)=>{
        console.log("Wind Speed: "+respose.current_observation.wind.speed);
        console.log("Humidity: "+respose.current_observation.atmosphere.humidity);
        console.log("Temperature: "+respose.current_observation.condition.temperature);
        console.log("Condition Text: "+respose.current_observation.condition.text);
        this.weatherData = respose;
      }
    })
  }
}
