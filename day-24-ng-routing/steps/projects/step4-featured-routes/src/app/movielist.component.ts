import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movielist',
  template: `
    <table>
      <thead>
        <tr>
          <th>Sl #</th>
          <th>Title</th>
          <th>Release Year</th>
          <th>More Details</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let movie of movieslist">
          <td>{{ movie.id }}</td>
          <td>{{ movie.title }}</td>
          <td>{{ movie.year }}</td>
          <td>
            <a [routerLink]="['/movie']" [queryParams]="{ mid: movie.id }">Click For More Details</a>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: []
})
export class MovielistComponent implements OnInit {

  movieslist: any;

  constructor( private mv: MoviesService, private ar:ActivatedRoute ) { }

  ngOnInit(): void {
    this.movieslist = this.mv.getMovies();
  }

}
