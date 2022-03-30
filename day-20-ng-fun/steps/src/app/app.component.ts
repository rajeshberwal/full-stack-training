import { Component } from '@angular/core';
 
/*
<div class="box" [class.bluebox]="showColor" [class.roundborder]="showBorder" >
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores culpa labore unde aut consectetur itaque nesciunt quos saepe possimus a molestiae nostrum eaque tempora iste amet pariatur iusto, architecto reprehenderit?
</div>
 
<div style="border : 10px solid yellowgreen;" [style.background-color]="bgcol">
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores culpa labore unde aut consectetur itaque nesciunt quos saepe possimus a molestiae nostrum eaque tempora iste amet pariatur iusto, architecto reprehenderit?
</div>
*/
@Component({
  selector: 'app-root',
  template : `
          <div class="box" [ngClass]="{ bluebox : showColor , roundborder : showBorder }">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores culpa labore unde aut consectetur itaque nesciunt quos saepe possimus a molestiae nostrum eaque tempora iste amet pariatur iusto, architecto reprehenderit?
          </div>
          <hr>
          <div [ngStyle]="{'background-color' : showColor ? 'pink' : 'blue', 'padding' : '10px', 'border' : '10px solid red' }">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores culpa labore unde aut consectetur itaque nesciunt quos saepe possimus a molestiae nostrum eaque tempora iste amet pariatur iusto, architecto reprehenderit?
          </div>
          <hr>
          Show Terms And Conditions 
          <input type="checkbox" (input)="showTerms = !showTerms">
          <fieldset *ngIf="showTerms">
          <legend>Terms & Conditions</legend>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error dolor nam earum dolorem minima, facere atque eveniet vitae esse sed soluta totam, a autem commodi expedita repellat magni praesentium!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error dolor nam earum dolorem minima, facere atque eveniet vitae esse sed soluta totam, a autem commodi expedita repellat magni praesentium!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error dolor nam earum dolorem minima, facere atque eveniet vitae esse sed soluta totam, a autem commodi expedita repellat magni praesentium!
          </p>
          </fieldset>
          <hr>
          <!--  <ol>
          <li>{{ avengers[0] }}</li>
          <li>{{ avengers[1] }}</li>
          <li>{{ avengers[2] }}</li>
          <li>{{ avengers[3] }}</li>
          </ol> -->
          <ol>
              <li *ngFor="let hero of avengers">{{ hero }}</li>
          </ol>
 
          <h3 ngNonBindable>Hello {{ Vijay }}</h3>
        <input type="range" #pow (input)="power = pow.value" min="5" max="10">
        <h2>Power is : {{ power }}</h2>
        <ul [ngSwitch]="power">
          <li *ngSwitchCase="6">Weak : {{ power }}</li>
          <li *ngSwitchCase="7">Booster Required : {{ power }}</li>
          <li *ngSwitchCase="8">Strong : {{ power }}</li>
          <li *ngSwitchCase="9">Strongest : {{ power }}</li>
          <li *ngSwitchCase="10">Invinsible : {{ power }}</li>
          <li *ngSwitchDefault >Defaut Power : {{ power }}</li>
        </ul>
 
        <hr>
        <p *ngIf="showTerms">{{ title }}</p>
        <ng-template [ngIf]="showTerms">{{ title }}</ng-template>
        <ng-template [ngIf]="showTerms">
          <app-second></app-second>
          <app-second></app-second>
          <app-second></app-second>
        </ng-template>
        
  `,
  styles : [`
    .box{
      width : 400px;
      padding : 10px;
      outline : 1px solid black;
      text-align : center;
    }
    .bluebox{
      background-color : lightblue
    }
    .roundborder{
      border : 10px solid grey;
      border-radius: 40px;
    }
  `]
})
export class AppComponent {
  title = 'welcome to your life';
  bgcol = 'crimson';
  showColor = false;
  showBorder = true;
  showTerms = false;
  power = '5';
  avengers = ['Ironman', 'Antman','Hulk', 'Captain America', 'Captain Marvel']
}