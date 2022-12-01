import { Component } from '@angular/core';
import { GifsServicesService } from 'src/app/gifs/services/gifs-services.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  constructor( private gifsService: GifsServicesService){}

  get historial(){
    return this.gifsService.historial;
  }
}
