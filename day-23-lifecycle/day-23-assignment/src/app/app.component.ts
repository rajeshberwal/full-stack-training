import { Component, ContentChild, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from './child.component';
/*
ViewChild
ViewChildren
 
ContentChild
ContentChildern
*/
@Component({
  selector: 'app-root',
  template : `
    <h1>Main Component : Power {{ apppower }}</h1>
    <button (click)="increaseChildPower()">Increase Power</button>
    <button (click)="decreaseChildPower()">Decrease Power</button>
    <button (click)="showHide()">Remove Child Component</button>
    <button (click)="showMessage()">Show Message in Child Component</button>
    <app-child #powerComp *ngIf="show"></app-child>
  `
})
export class AppComponent implements OnInit {
  title = 'steps';
  apppower = 0;
  show = true;
  @ViewChild('powerComp') cc:any;
  @ViewChildren('powerComp') msg:any;
  constructor(){
    console.log("AppComponent's constructor was called");
  }
  ngOnInit(): void {
    this.apppower = 5;
    console.log("AppComponent's ngOnInit was called");
  }
  increaseChildPower(){
    this.cc.increasePower();
  }
  decreaseChildPower(){
    this.cc.decreasePower();
  }
  showHide(){
    this.show = !this.show;
  }

  showMessage() {
    // console.log(this.msg.first);
    this.msg.first.message = 'Hello World!';
  }
}