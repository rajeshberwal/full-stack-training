import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-heroadd',
  template: `
    <h2>{{ selectedHero.name }}</h2>
    <img [src]="selectedHero.image.url" [alt]="selectedHero.name">
    <p>{{ selectedHero | json }}</p>
    <hr>
    <input #ryear min="0" max="100" type="range" [(ngModel)]="selectedHero.powerstats.power">
    <a [routerLink]="['/edithero']" [queryParams]="{ hname: selectedHero.name, power: selectedHero.powerstats.power}">Set Power of {{ selectedHero.name }}</a>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class HeroComponent implements OnInit {
  selectedHero:any;

  constructor(private hs: HeroesService, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedHero = this.hs.getSelectedHeroes(this.ar.snapshot.queryParams['hid']);
  }

}
