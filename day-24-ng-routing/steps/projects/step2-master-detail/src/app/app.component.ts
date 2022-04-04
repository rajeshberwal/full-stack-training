import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Heros List</h1>
    <hr>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'step2-master-detail';
}
