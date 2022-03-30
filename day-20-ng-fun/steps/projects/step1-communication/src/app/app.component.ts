import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <hr>
    <!-- <app-second>{{ message }}</app-second>
    <app-second>
      <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
        <li>List Item 4</li>
        <li>List Item 5</li>
      </ul>
    </app-second>
    <p>
      First Paragraph
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit veritatis libero, velit laboriosam laudantium fuga blanditiis asperiores cumque at itaque cupiditate? Ab minima modi, et ad non nesciunt officiis consequuntur.
    </p>
    <p class="box">
      Second Paragraph
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit veritatis libero, velit laboriosam laudantium fuga blanditiis asperiores cumque at itaque cupiditate? Ab minima modi, et ad non nesciunt officiis consequuntur.
    </p>
    <button>Click Me</button> -->
    <app-second (compEvent)="compEventHandler($event)" [cp]="power"></app-second>
    <button (click)="power = power + 1">Increase Power</button>
  `,
  styles: []
})
export class AppComponent {
  title = 'step1-communication';
  message = 'Hello iSchool Connect India';
  power = 5;

  compEventHandler(msg: string) {
    this.title = msg;
  }
}
