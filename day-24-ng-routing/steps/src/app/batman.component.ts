import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-batman',
  template: `
    <h1>Batman Says Hi!</h1>
    <h2>Quantity: {{quantity || '0'}}</h2>
    <h2>Quantity: {{version || '0'}}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid culpa omnis eum dolorum quas. Corrupti voluptatibus, necessitatibus incidunt libero ipsam iste animi aspernatur doloremque, veritatis, reprehenderit tempore ab laboriosam consectetur?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid culpa omnis eum dolorum quas. Corrupti voluptatibus, necessitatibus incidunt libero ipsam iste animi aspernatur doloremque, veritatis, reprehenderit tempore ab laboriosam consectetur?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid culpa omnis eum dolorum quas. Corrupti voluptatibus, necessitatibus incidunt libero ipsam iste animi aspernatur doloremque, veritatis, reprehenderit tempore ab laboriosam consectetur?</p>
  `,
  styles: [
  ]
})
export class BatmanComponent implements OnInit {
  quantity:any;
  version:any;
  constructor(private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.quantity = this.ar.snapshot.params['qty'];
    this.version = this.ar.snapshot.params['ver'];
  }

}
