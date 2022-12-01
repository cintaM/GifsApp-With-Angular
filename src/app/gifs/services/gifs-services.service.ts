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

  constructor(private http: HttpClient){}

  searchGifs(query: string) {
    
      query = query.trim().toLocaleLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query)
      this._historial = this._historial.splice(0, 10)
    }
    
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=TAIaI3owjLOT4Ilcqmx8a25dtVxjGO7X&q=${query}&limit=10`)
    .subscribe(resp => {
      this.results = resp.data;
      console.log(resp.data)
    })
    
  }
}
