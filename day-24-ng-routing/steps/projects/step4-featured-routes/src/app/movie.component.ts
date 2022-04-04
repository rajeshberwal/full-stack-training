import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-heroadd',
  template: `
    <h2>{{ selectedMovie.title }}</h2>
    <img [src]="selectedMovie.posterUrl" [alt]="selectedMovie.title">
    <p>{{ selectedMovie | json }}</p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class MovieComponent implements OnInit {
  selectedMovie:any;

  constructor(private mv: MoviesService, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedMovie = this.mv.getSelectedMovie(this.ar.snapshot.queryParams['mid']);
  }

}
