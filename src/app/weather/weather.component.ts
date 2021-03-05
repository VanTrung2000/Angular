import { Component, OnInit } from '@angular/core';
import { Weatherservice } from './weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [Weatherservice]

})
export class WeatherComponent implements OnInit {
  txtcityname='';
  cityName='';
  temp=null;
  isloading = false;
  constructor(private weatherservice : Weatherservice) { 
  }
  ngOnInit(): void {   
  }
  getweather(){
    this.isloading=true;
    this.weatherservice.getTemp(this.txtcityname)
    .then(temp => {
      this.cityName = this.txtcityname;
      this.temp = temp;
      this.isloading = false;
      this.txtcityname = '';
    })
    .catch(err => {
      alert('Không tìm thấy tên thành phố!');
      this.isloading=false;
      this.cityName=''
      this.txtcityname = '';
    });
  }
  getMesage(){
    if(this.isloading){
      return 'Loading...'
    }
    return this.cityName==='' ? 'Nhập tên thành phố' : (this.cityName + ' nhiệt độ:' + this.temp + '°C');
  }

}
