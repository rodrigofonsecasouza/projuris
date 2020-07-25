import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationModule } from '../../../shared/components/pagination/pagination.module';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonTableComponent } from './table/pokemon-table.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { SearchComponent } from './search/search.component'

@NgModule({
    declarations: [
        PokemonListComponent,
        PokemonTableComponent,
        FilterByDescription,
        SearchComponent
    ],
    imports: [CommonModule,
        PaginationModule,
    ]
})
export class PokemonListModule { }