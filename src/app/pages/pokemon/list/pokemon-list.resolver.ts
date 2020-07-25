import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PokemonService } from '../pokemon.service';
import { PokemonResponse } from '../pokemon';


@Injectable({ providedIn: 'root' })
export class PokemonListResolver implements Resolve<Observable<PokemonResponse>> {

    constructor(private service: PokemonService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.service.list(0, 10);
    }

}