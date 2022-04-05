import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroadd',
  template: `
    <h1>Add A Hero</h1>
    <label for="name">Hero Name</label>
    <input id="name" type="text">
    <label for="power">Hero Power</label>
    <input id="power" type="text">
    <button (click)="showMsg()">Add Hero</button>
    <hr>
    <h2>{{ msg }}</h2>
  `,
  styles: []
})
export class HeroaddComponent implements OnInit {
  msg:string = '';
  constructor() { }

  ngOnInit() {
  }

  showMsg() {
    this.msg = 'Hero Added.'
  }
}
