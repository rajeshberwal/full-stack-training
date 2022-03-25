import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Binding 101</h1>
    <hr>
    <h2>{{ title }}</h2>
    <h2 innerHTML="{{ title }}"></h2>
    <h2 innerText="{{ title }}"></h2>
    <h2 [innerText]="title.toUpperCase()"></h2>
    <h2 bind-innerText="title.toLowerCase()"></h2>
    <input type="text" [title]="title">
  `,
  styles: [`
    .redbox{
      width: 500px;
      height: 500px;
      background-color: red;
    }
  `]
})
export class AppComponent {
  title = 'This is My Step 2';
}
