import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <!-- <app-header [compData]="appData"></app-header> -->
      <app-header></app-header>
      <hr>
      <!-- <app-grid [compData]="appData"></app-grid> -->
      <app-grid></app-grid>
      <hr>
      <!--
        <ischool><p>Some Content</p></ischool>
        <ischool><p>Some Content</p></ischool>
        <ischool><p>Some Content</p></ischool>
      -->
      <!--
        <p class="ischool">Some Content</p>
        <p class="ischool">Some Content</p>
        <p class="ischool">Some Content</p>
      -->
      <!--
        <p ischool="red">Some Content</p>
        <p ischool="grey">Some Content</p>
        <p ischool="green">Some Content</p>
      -->
      <p ischool='{"txtcol": "red", "bgcol": "green"}'>Some Content</p>
    </div>
  `
})
export class AppComponent {
  title = 'steps';
  appData:any;
  
}
