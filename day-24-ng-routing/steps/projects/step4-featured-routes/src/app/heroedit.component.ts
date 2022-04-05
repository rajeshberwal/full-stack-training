import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroedit',
  template: `
    <h2>Hero To Edit: {{ heroToEdit }}</h2>
    <h2>Update Release Year To: {{ updatedPower }}</h2>
  `,
  styles: []
})
export class HeroeditComponent implements OnInit {
  heroToEdit:any;
  updatedPower:any;
  constructor(private ar:ActivatedRoute) {}

  ngOnInit() {
      this.heroToEdit = this.ar.snapshot.queryParams['hname'];
      this.ar.queryParams.subscribe(rparams => this.updatedPower = rparams['power']);
  }
}
