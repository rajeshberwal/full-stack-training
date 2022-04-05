import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movieedit',
  template: `
    <h2>Movie To Edit: {{ movieToEdit }}</h2>
    <h2>Update Release Year To: {{ movieNewReleaseYear }}</h2>
  `,
  styles: []
})
export class MovieeditComponent implements OnInit {
  movieToEdit:any;
  movieNewReleaseYear:any;
  constructor(private ar:ActivatedRoute) {}

  ngOnInit() {
      this.movieToEdit = this.ar.snapshot.queryParams['mname'];
      this.ar.queryParams.subscribe(rparams => this.movieNewReleaseYear = rparams['year']);
  }

}
