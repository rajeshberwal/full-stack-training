import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-herolist',
  template: `
    <table>
      <thead>
        <tr>
          <th>Sl #</th>
          <th>Title</th>
          <th>Full Name</th>
          <th>More Details</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let hero of heroeslist">
          <td>{{ hero.id }}</td>
          <td>{{ hero.name }}</td>
          <td>{{ hero.biography['full-name'] }}</td>
          <td>
            <a [routerLink]="['/hero']" [queryParams]="{ hid: hero.id }">Click For More Details</a>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: []
})
export class HerolistComponent implements OnInit {

  heroeslist: any;

  constructor( private hs:HeroesService, private ar:ActivatedRoute ) { }

  ngOnInit(): void {
    this.heroeslist = this.hs.getHeroes();
  }

}