import { Component, Input } from '@angular/core';
import { Pokemon } from '../model/pokemon';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css'],
})
export class EquipoComponent {
  @Input() selectedPokemons!: Pokemon[];
}

/***********GICSON NELSON RIVAS SEMINARIO - 20/04/2023***********/
