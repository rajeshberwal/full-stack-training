import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './heroes.service';

@Component({
  template: `
    <a [routerLink]="['']" queryParamsHandling="preserve">Back To Master Page</a>
    <h2>{{ selectedHero.name }}: Power - {{ selectedHero.powerstats.power }}</h2>
    <img [src]="selectedHero.image.url" [alt]="selectedHero.name">
    <p>{{ selectedHero | json }}</p>
    <a [routerLink]="['edit', selectedHero.powerstats.power, selectedHero.name]">Edit: {{ selectedHero.name }}</a>
    <br>
    <input min="0" max="100" type="range" [(ngModel)]="selectedHero.powerstats.power">
    <a [routerLink]="['edit', selectedHero.powerstats.power, selectedHero.name]">Set Power of {{ selectedHero.name }}</a>
    <h1>User Name: {{ username }}</h1>
    <h1>User City: {{ usercity }}</h1>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class DetailComponent implements OnInit {
  selectedHero:any;
  username:any;
  usercity:any;

  constructor(private hs: HeroesService, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedHero = this.hs.getSelectedHeroes(this.ar.snapshot.queryParams['hid']);
    this.username = this.ar.snapshot.params['username'];
    this.usercity = this.ar.snapshot.params['city'];
  }

}
