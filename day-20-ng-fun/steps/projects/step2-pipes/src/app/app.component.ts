import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Angular Pipes</h1>
      <hr>
      <h2>{{ title.toUpperCase() }}</h2>
      <h2>{{ title | uppercase | lowercase | titlecase }}</h2>
      <ol>
        <li *ngFor="let hero of heroData">{{ hero.title }}</li>
      </ol>

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
          <tr *ngFor="let hero of heroData">
            <td>{{ hero.sl }}</td>
            <td>{{ hero.title | uppercase }}</td>
            <td>{{ hero.firstname + ' ' + hero.lastname }}</td>
            <td>
              <img class="img-thumbnail rounded" [src]="hero.poster" [alt]="hero.title" width="50">
            </td>
            <td>{{ hero.city }}</td>
            <td>{{ hero.ticketprice | currency: 'INR' : 'symbol' : '.2-3' }}</td>
            <td>{{ hero.releasedate | date: 'dd-MMMM-yyyy' }}</td>
            <td>{{ hero.movieslist.length }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'step2-pipes';
  heroData = [{
      "sl": 1,
      "title": "Batman",
      "gender": "male",
      "firstname": "Bruce",
      "lastname": "Wayne",
      "city": "Gotham",
      "ticketprice": 123.4567,
      "releasedate": "1/26/2018",
      "poster": "assets/images/batman.jpg",
      "movieslist": [{
        "title": "Batman Begins",
        "poster": "assets/images/bat1_tn.jpg"
      }, {
        "title": "Dark Knight",
        "poster": "assets/images/bat2_tn.jpg"
      }, {
        "title": "Dark Knight Raises",
        "poster": "assets/images/bat3_tn.jpg"
      }]

    },
    {
      "sl": 2,
      "title": "Superman",
      "gender": "male",
      "firstname": "Clark",
      "lastname": "Kent",
      "city": "Metropolis",
      "ticketprice": 178.6789,
      "releasedate": "1/27/2018",
      "poster": "assets/images/superman.jpg",
      "movieslist": [{
        "title": "Superman The Movie",
        "poster": "assets/images/super1_tn.jpg"
      }, {
        "title": "Superman Returns",
        "poster": "assets/images/super2_tn.jpg"
      }, {
        "title": "Superman Man of Steel",
        "poster": "assets/images/super3_tn.jpg"
      }]

    },
    {
      "sl": 3,
      "title": "Ironman",
      "gender": "male",
      "firstname": "Tony",
      "lastname": "Stark",
      "city": "New York",
      "ticketprice": 122,
      "releasedate": "1/27/2018",
      "poster": "assets/images/ironman.jpg",
      "movieslist": [{
        "title": "Ironman",
        "poster": "assets/images/iron1_tn.jpg"
      }, {
        "title": "Ironman 2",
        "poster": "assets/images/iron2_tn.jpg"
      }, {
        "title": "Ironman 3",
        "poster": "assets/images/iron3_tn.jpg"
      }]

    }, {
      "sl": 4,
      "title": "Phantom",
      "gender": "male",
      "firstname": "Kit",
      "lastname": "Walker",
      "city": "Bhangala",
      "ticketprice": 98.6456,
      "releasedate": "1/27/2018",
      "poster": "assets/images/phantom.jpg",
      "movieslist": [{
        "title": "The Phantom Slam Evilz",
        "poster": "assets/images/phantom1_tn.jpg"
      }]

    }, {
      "sl": 5,
      "title": "Spiderman",
      "gender": "male",
      "firstname": "Peter",
      "lastname": "Parker",
      "city": "New York",
      "ticketprice": 1.3456,
      "releasedate": "9/26/2018",
      "poster": "assets/images/spiderman.jpg",
      "movieslist": [{
        "title": "Spiderman",
        "poster": "assets/images/spider1_tn.jpg"
      }, {
        "title": "Spiderman 2",
        "poster": "assets/images/spider2_tn.jpg"
      }, {
        "title": "Spiderman 3",
        "poster": "assets/images/spider3_tn.jpg"
      }]
    },
    {
      "sl": 6,
      "title": "Wonder Women",
      "gender": "female",
      "firstname": "Princess",
      "lastname": "Diana",
      "city": "Amazon",
      "ticketprice": 341.3456978978,
      "releasedate": "11/26/2018",
      "poster": "assets/images/wonderwoman.jpg",
      "movieslist": []
    }
  ]
}
