import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Heros</h1>
      <img #hero src="images/rajani.jpg">
      <br>
      <button [disabled]="agree">Click Me</button>
      <br>
      <button (click)="clickHandler()">Click Me</button>
      <br>
      <button on-click="clickHandler()">Click Me</button>
      <br>
      <button on-click="clickHandler($event)">Button 1</button>
      <button on-click="clickHandler($event)">Button 2</button>
      <button on-click="clickHandler($event)">Button 3</button>
      <button on-click="clickHandler($event)">Button 4</button>
      <br>
      <button on-click="setAgreeDisagree()">Agree / Disagree</button>

      <hr>
      <button on-click="hero.src='images/rajani.jpg'">Rajni</button>
      <button on-click="hero.src='images/batman.jpg'">Batman</button>
      <button on-click="hero.src='images/antman.jpg'">Antman</button>
      <button on-click="hero.src='images/deadpool.jpg'">DeadPool</button>

      <hr>
      <h3>{{title}}</h3>
      <input [value]="title" #textip (input)="changeTitle(textip.value)">
      <button on-click="changeTitle(textip.value)">Change Title</button>

      <hr>
      <h2>2 WAy Binding</h2>
      <input [value]="title" #textip1 (input)="title = textip1.value">

      <br>
      <hr>
      <input [(ngModel)]="title">

      <h3>Title is {{ user.title }}</h3>
      <input type="text" (keydown.space)="keyPressHandler()">

      <div [class]="selectedClass">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quae odit quos rem quod minima ea corrupti qui adipisci inventore id ducimus cupiditate natus aliquam hic accusantium culpa. Eos, sit.
      </div>
      <hr>
      <div [class.orangebox]="agree">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quae odit quos rem quod minima ea corrupti qui adipisci inventore id ducimus cupiditate natus aliquam hic accusantium culpa. Eos, sit.
      </div>
    </div>
  `,
  styles: [`
    .box{
      width : 400px;
      padding : 10px;
      outline : 1px solid black;
    }
    .orangebox{
      background-color : orange;
      color : papayawhip;
    }
    .borderBox{
      border : 5px dashed grey;
    }
  `]
})
export class AppComponent {
  title = 'steps-day-19';
  agree = true;
  selectedClass = 'box';
  user = {
    title: ''
  }

  clickHandler(evt?: any) {
    if(evt) {
      alert('You clicked ' + evt.target.innerHTML);
    } else {
      alert('You clickd a button.');
    }
  }

  setAgreeDisagree() {
    this.agree = !this.agree;
  }

  changeTitle(nTitle: string) {
    this.title = nTitle;
    this.user.title = 'IRONMAN';
  }

  keyPressHandler() {
    console.log('Spacebar Got Pressed.');
  }
}
