import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {
  c = "";
  f = "";
  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }

  onCahange(value:string, type: "c" | "f"){
    if(value === null){
      return;
    }
    const temperature = Number(value);
    if (type === "c"){ 
      this.f =  ((temperature * 9) / 5 + 32).toFixed(1);
    }else {
      this.c = (((temperature - 32 )*5) /9).toFixed(1);
    }
  }

}