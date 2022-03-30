import { Component, Input } from "@angular/core";
import { HeroDataService } from "./hero.services";

@Component({
  selector: 'app-grid',
  template: `
        <h2>App Version: {{ compVersion }}</h2>
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Sr. #</th>
              <th>Title</th>
              <th>Full Name</th>
              <th>Poster</th>
              <th>City</th>
              <th>Ticket Price</th>
              <th>Release Date</th>
              <th>Movies List</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let hero of compData">
              <td>{{ hero.sl }}</td>
              <td>{{ hero.title | uppercase }}</td>
              <td>{{ hero.firstname + ' ' + hero.lastname | gen: hero.gender }}</td>
              <td>
                <img class="img-thumbnail rounded" [src]="hero.poster" [alt]="hero.title" width="50">
              </td>
              <td>{{ hero.city }}</td>
              <td>{{ hero.ticketprice | currency: 'INR' : 'symbol' : '.2-3' }}</td>
              <td>{{ hero.releasedate | date: 'dd-MMMM-yyyy' }}</td>
              <td>
                <!-- <div *ngFor="let movie of hero.movieslist">
                  <p>{{ movie.title }}</p>
                  <img class="img-thumbnail rounded" [src]="movie.poster" [alt]="movie.title" width="50">
                </div> -->
                <div *ngIf="hero.movieslist.length" class="card">
                  <ul class="list-group list-group-flush">
                    <li *ngFor="let movie of hero.movieslist" class="list-group-item">
                      <img class="img-thumbnail rounded" [src]="movie.poster" [alt]="movie.title" width="50">
                      {{ movie.title }}
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
    `
})
export class GridComp {
  //  @Input() compData: any;
   compData: any;
   compVersion: any;

   // hds: HeroDataService = new HeroDataService()
    // constructor() {
    //     this.compData = this.hds.getData();
    //     this.compVersion = this.hds.getAppVersion();
    // }

   constructor(private hds: HeroDataService) {
    // this.compData = this.hds.getData();
    this.compVersion = this.hds.getAppVersion();
    this.hds.getData().subscribe(res => this.compData = res);
}
}
