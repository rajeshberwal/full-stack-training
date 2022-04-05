import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movieadd',
  template: `
    <h1>Add A Movie</h1>
    <label for="name">Movie Name</label>
    <input id="name" type="text">
    <label for="year">Release Year</label>
    <input id="year" type="text">
    <button (click)="showMsg()">Add Movie</button>
    <hr>
    <h2>{{ msg }}</h2>
  `,
  styles: []
})
export class MovieaddComponent implements OnInit {
  msg:string = '';
  constructor() { }

  ngOnInit() {
  }

  showMsg() {
    this.msg = 'Movie Added.'
  }
}
