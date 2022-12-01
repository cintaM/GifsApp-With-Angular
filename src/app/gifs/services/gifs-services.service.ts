import { Injectable } from '@angular/core'
import { HttpClient} from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsServicesService {

  private apiGifsKey: string = "TAIaI3owjLOT4Ilcqmx8a25dtVxjGO7X";
  private _historial: string[] = [];
  public results: Gif[] = [];

  get historial() {
    return [...this._historial]
  }

  constructor(private http: HttpClient){
    //dos formas de hacer que se mantenga la información
    //tipo 1
    // if(localStorage.getItem('historial')){
    //   this._historial = JSON.parse(localStorage.getItem('historial')!)
    // }
    //tipo 2
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.results = JSON.parse(localStorage.getItem('resultado')!) || [];
  }

  searchGifs(query: string) {
    
      query = query.trim().toLocaleLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query)
      this._historial = this._historial.splice(0, 10)
      //enviar la informacion al navegador para que persista 
      localStorage.setItem('historial', JSON.stringify(this._historial))
      
    }
    
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=TAIaI3owjLOT4Ilcqmx8a25dtVxjGO7X&q=${query}&limit=10`)
    .subscribe(resp => {
      this.results = resp.data;
      localStorage.setItem('resultado', JSON.stringify(this.results))
      console.log(resp.data)
      
    })
    
  }
}
