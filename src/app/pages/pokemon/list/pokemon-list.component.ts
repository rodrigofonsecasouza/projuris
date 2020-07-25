import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
    selector: 'pro-pokemon-list',
    templateUrl: './pokemon-list.component.html'
})
export class PokemonListComponent implements OnInit {

    pokemons: Object[] = [];
    count: number = 0;
    filter: string = '';

    constructor(
        private activatedRoute: ActivatedRoute,
        private pokemonService: PokemonService
    ) { }

    ngOnInit(): void {
        this.pokemons = this.activatedRoute.snapshot.data.pokemons.results
        this.count = this.activatedRoute.snapshot.data.pokemons.count;
    }

    onChangePage({ offset, limit }) {
        this.pokemonService.list(offset, limit)
            .subscribe(pokemons => {
                this.filter = '';
                this.pokemons = this.pokemons = (pokemons.results)
                this.count = pokemons.count;
            });
    }

}