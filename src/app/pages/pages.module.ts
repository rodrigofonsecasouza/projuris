import { NgModule } from '@angular/core';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { PokemonModule } from './pokemon/pokemon.module';

@NgModule({

    imports: [
        AboutModule,
        HomeModule,
        PokemonModule
    ]
})
export class PagesModule { }