import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PokemonListResolver } from './pages/pokemon/list/pokemon-list.resolver';
import { PokemonListComponent } from './pages/pokemon/list/pokemon-list.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    {
        path: 'pokemon', component: PokemonListComponent,
        resolve: {
            pokemons: PokemonListResolver
        }
    },
    { path: '**', component: NotFoundComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}