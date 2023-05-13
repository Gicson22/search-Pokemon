import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipoComponent } from './equipo/equipo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';

@NgModule({
  declarations: [AppComponent, PokemonSearchComponent, EquipoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*********GICSON NELSON RIVAS SEMINARIO ********/
