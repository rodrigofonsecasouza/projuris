import { Pipe, PipeTransform } from '@angular/core';

import { Pokemon } from '../pokemon';

@Pipe({ name: 'filterByDescription' })
export class FilterByDescription implements PipeTransform {

    transform(pokemons: Pokemon[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery
            .trim()
            .toLowerCase();

        if (descriptionQuery) {
            return pokemons.filter(pokemon =>
                pokemon.name.toLowerCase().includes(descriptionQuery)
            );
        } else {
            return pokemons;
        }
    }

}