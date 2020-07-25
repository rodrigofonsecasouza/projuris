import { NgModule } from '@angular/core';
import { PokemonListModule } from './list/pokemon-list.module'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [PokemonListModule, HttpClientModule]
})
export class PokemonModule { }