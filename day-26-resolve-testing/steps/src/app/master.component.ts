import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './heroes.service';

@Component({
  template: `
  <h1>{{ apptitle }}</h1>
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
            <a [routerLink]="['/hero', hero.id]">Click For More Details</a>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [
  ]
})
export class MasterComponent implements OnInit {
  heroeslist: any;
  apptitle:any;

  // constructor( private hs: HeroesService, private ar: ActivatedRoute ) { }
  constructor( private ar: ActivatedRoute ) { }

  ngOnInit(): void {
    // this.heroeslist = this.hs.getHeroes();
    this.ar.data.subscribe(res => {
      this.apptitle = res['apptitle'];
      this.heroeslist = res['herodata']
    });
  }

}
