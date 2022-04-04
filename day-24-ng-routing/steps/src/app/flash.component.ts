import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flash',
  template: `
    <h1>Flash Says Hi!</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid culpa omnis eum dolorum quas. Corrupti voluptatibus, necessitatibus incidunt libero ipsam iste animi aspernatur doloremque, veritatis, reprehenderit tempore ab laboriosam consectetur?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid culpa omnis eum dolorum quas. Corrupti voluptatibus, necessitatibus incidunt libero ipsam iste animi aspernatur doloremque, veritatis, reprehenderit tempore ab laboriosam consectetur?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid culpa omnis eum dolorum quas. Corrupti voluptatibus, necessitatibus incidunt libero ipsam iste animi aspernatur doloremque, veritatis, reprehenderit tempore ab laboriosam consectetur?</p>
  `,
  styles: [
  ]
})
export class FlashComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
