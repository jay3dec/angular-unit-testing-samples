import { Component } from '@angular/core';
import { DataServiceService } from '../app/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angu-unit-test';

  constructor(private dataService : DataServiceService){}

  count = 0;
  config = {};
  data;

  calculate(a,b){
    this.count = (a * b) + 100
    return this.count;
  }

  saveConfigLocally(param){
    this.config = param;
  }

  saveData(){
    let req_params = {
      count : this.calculate(10,10),
      name : "sam"
    };
    this.saveConfigLocally(req_params);
    this.dataService.saveConfigData(req_params).subscribe(response => {
      this.data = response;
    })
  }
}
