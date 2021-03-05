import { from } from "rxjs";
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()

export class Weatherservice{
    constructor(private http:Http){}
    getTemp(cityName:string){
        const url = 'http://api.openweathermap.org/data/2.5/weather?&appid=1ba3f1c2f17d666f3f9ab31d39cdc447&units=metric&q=' + cityName;
        return this.http.get(url)
        .toPromise()
        .then(res => res.json())
        .then(resJson => resJson.main.temp);
    }

}