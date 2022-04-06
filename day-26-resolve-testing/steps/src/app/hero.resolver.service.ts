import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { HeroesService } from "./heroes.service";

@Injectable()
export class HeroResolverService implements Resolve<any>{
    constructor(private hs: HeroesService) {}

    resolve() {
        return this.hs.getHeroes();
    }
}