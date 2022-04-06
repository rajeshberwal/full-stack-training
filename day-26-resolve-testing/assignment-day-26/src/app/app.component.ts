import { Component } from '@angular/core';
import { User } from './user.model';
import { ISchoolUserService } from './user.service';
 
@Component({
  selector: 'app-root',
  template : `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <li class="nav-item"><a [routerLink]="['']">Home</a></li>
      <li class="nav-item"><a [routerLink]="['list']">User List</a></li>
      <li class="nav-item"><a [routerLink]="['add']">Add User</a></li>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'steps';
  
}