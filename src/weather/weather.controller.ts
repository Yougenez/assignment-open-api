import { Controller, Get, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {

    constructor(private readonly weatherService: WeatherService){}

    @Get('current/:place')
    async getUserInfo(@Param('place') place: string ){
        return this.weatherService.getCurrentWeather(place);
    }

    @Get('forecast/:place')
    async getTitleDetails(@Param('place') place: string){
        return this.weatherService.getForecastWeather(place);
    }
}
