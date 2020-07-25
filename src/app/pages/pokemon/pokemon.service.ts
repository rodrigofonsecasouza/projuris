import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonResponse } from './pokemon';

const API = 'https://pokeapi.co/api/v2/pokemon';

@Injectable({ providedIn: 'root' })
export class PokemonService {

    constructor(private http: HttpClient) { }

    list(offset: number, limit: number) {
        const params = new HttpParams()
            .append('offset', offset.toString()).append('limit', limit.toString());
        return this.http.get<PokemonResponse>(API, { params })
    }
}