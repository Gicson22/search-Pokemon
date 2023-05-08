import { Component } from '@angular/core';
import { Pokemon } from './model/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public selectedPokemons!: Pokemon[];
  title = 'Pokemon, !Yo te elijo!';

  onSelectPokemonEvent(selectedPokemons: Pokemon[]) {
    this.selectedPokemons = selectedPokemons;
  }

}

/***********GICSON NELSON RIVAS SEMINARIO - 20/04/2023***********/
