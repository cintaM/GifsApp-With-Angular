import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServicesService } from '../services/gifs-services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

@ViewChild('txtEntry') txtEntry!: ElementRef<HTMLInputElement>;

constructor(private gifsService: GifsServicesService){
}

  search(){
    const valor= this.txtEntry.nativeElement.value
    this.gifsService.searchGifs(valor)
    this.txtEntry.nativeElement.value = '';
  }
}
