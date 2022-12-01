import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsServicesService {

  private _historial: string[] = [];

  get historial(){
    return [...this._historial];
     }

     searchGifs( query: string){
      this._historial.unshift(query);

      console.log(this._historial)
     }
}
