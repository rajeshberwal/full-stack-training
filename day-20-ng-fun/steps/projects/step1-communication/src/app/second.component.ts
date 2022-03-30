import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <div class="box">
      <h2>Second Component</h2>
      <!-- <ng-content></ng-content> -->
      <!-- <ng-content select="ul"></ng-content>
      <ng-content select="p.box"></ng-content>
      <ng-content select="button"></ng-content>
      <ng-content select="p"></ng-content>
      <ng-content select="ul"></ng-content> -->
      <h2>Power is {{ compPower }}</h2>
      <input #ti>
      <button (click)="emitCompEvent(ti.value)">Send Title</button>
    </div>
  `,
  styles: [`
    .box{
      border: 2px solid grey;
      padding: 10px;
    }
  `]
})
export class SecondComponent {
  @Input('cp') compPower: number = 0;
  @Output() compEvent:EventEmitter<any> = new EventEmitter();

  emitCompEvent(msg: string) {
    this.compEvent.emit(msg);
  }
}
