import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WeatherService {

    async getCurrentWeather(place: string):  Promise<any>{

        const options = {
            url: 'https://weather-api167.p.rapidapi.com/api/weather/current',
            params: {
                place: place,
                units: 'standard',
                lang: 'en',
                mode: 'json'
            },
            headers: {
                'x-rapidapi-key': '8b04cab07amsh315133622000192p182a60jsne985a57d3ee2',
                'x-rapidapi-host': 'weather-api167.p.rapidapi.com',
                Accept: 'application/json'
            }
            };

            try {
                const response = await axios.request(options);
                return response.data;
            } catch (error) {
                console.error(error);
            }
    }

    async getForecastWeather(place: string):  Promise<any>{

        const options = {
            url: 'https://weather-api167.p.rapidapi.com/api/weather/forecast',
            params: {
                place: place,
                cnt: '3',

                lang: 'en'
            },
            headers: {
                'x-rapidapi-key': '8b04cab07amsh315133622000192p182a60jsne985a57d3ee2',
                'x-rapidapi-host': 'weather-api167.p.rapidapi.com',
                Accept: 'application/json'
            }
            };

            try {
                const response = await axios.request(options);
                return response.data;
            } catch (error) {
                console.error(error);
            }
    }
}
