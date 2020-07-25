import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Pokemon } from '../../pokemon';

const pokemonsStorageKey = 'pokemons_favorites';

@Component({
    selector: 'pro-pokemon-table',
    templateUrl: './pokemon-table.component.html'
})

export class PokemonTableComponent {

    @Input() pokemons: Object[] = [];
    @Input() count: number = 0;
    @Output() changePage = new EventEmitter<any>(true);

    pokemonsFavorites: Pokemon[] = [];

    constructor(private storageService: StorageService) {
        this.pokemonsFavorites = storageService.getData(pokemonsStorageKey) || [];
    }

    onChangePage(pagination) {
        this.changePage.emit(pagination);
    }

    favoriteClass(pokemon) {
        const index = this.pokemonsFavorites.map(e => e.url).indexOf(pokemon.url);
        if (index > -1)
            return 'fa fa-star';
        return 'fa fa-star-o'
    }

    clickStar(pokemon: Pokemon) {
        const index = this.pokemonsFavorites.map(e => e.url).indexOf(pokemon.url);
        if (index > -1)
            this.pokemonsFavorites.splice(index, 1);
        else
            this.pokemonsFavorites.push(pokemon);

        //OU INSERIR NO ONDESTROY DO COMPONENT O SETDATA NO STORAGE
        this.storageService.setData(pokemonsStorageKey, this.pokemonsFavorites);
    }
}