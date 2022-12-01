import { Component } from '@angular/core';
import { GifsServicesService } from '../services/gifs-services.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  get results(){
    return this.gifsService.results;
  }

  constructor(private gifsService: GifsServicesService){}

}
