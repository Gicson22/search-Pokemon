import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private urlApi : string;

  constructor(
    private _http : HttpClient
  ) {
    this.urlApi = 'https://pokeapi.co/api/v2/pokemon';

  }
  public obtenerPokemon(idForSearch: number) : Observable<any>{
    return this._http.get<any>(`${this.urlApi}/${idForSearch}`)
  }


}

/***********GICSON NELSON RIVAS SEMINARIO - 20/04/2023***********/
