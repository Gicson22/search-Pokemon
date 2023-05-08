import { Component, EventEmitter, Output } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { PokemonService } from '../service/pokemones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pokemom-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css'],
})
export class PokemonSearchComponent {
  @Output() selectPokemonEvent = new EventEmitter<Pokemon[]>();

  public pokemones!: Pokemon[];
  public pokemon!: Pokemon;
  public idForSearch!: number;

  constructor(private _pokemonService: PokemonService) {
    this.pokemon = new Pokemon(0, '', [], '', '');
    this.pokemones = [];

  }

  searchPokemon() {
    this._pokemonService
      .obtenerPokemon(this.idForSearch)
      .subscribe(({ types, sprites, name }) => {
        this.pokemon.imagen = sprites.other.home.front_default;
        this.pokemon.numero = this.idForSearch;
        this.pokemon.nombre = name;
        this.pokemon.avatar = sprites.front_default;
        this.pokemon.tipos = types;
      });


  }

  selectPokemon() {
    this.pokemones.push({ ...this.pokemon });
    if (this.pokemones.length <= 5) {
      this.selectPokemonEvent.emit([...this.pokemones]);
    } else {
      Swal.fire({
        icon: 'warning',
        html : 'No se pueden Agregar mas de 5 Pokemones',
    });
    }
  }
}

/***********GICSON NELSON RIVAS SEMINARIO - 20/04/2023***********/
