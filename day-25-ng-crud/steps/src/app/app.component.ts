import { Component } from '@angular/core';
import { User } from './user.model';
import { ISchoolUserService } from './user.service';

@Component({
  selector: 'app-root',
  template: `
    <table>
      <thead>
        <tr>
          <th>Sl #</th>
          <th>User Name</th>
          <th>User Email</th>
          <th>User City</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of userdata">
          <td>{{ getSl() }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.useremail }}</td>
          <td>{{ user.usercity }}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class AppComponent {
  title = 'steps';
  // userdata: Array<User> = [
  //   {
  //     username: '',
  //     useremail: '',
  //     usercity: ''
  //   }
  // ];
  userdata:any = [];
  cnt = 0;

  constructor(private usr: ISchoolUserService){}

  // ngOnInit() {
  //   this.usr.getUser().forEach((user:any) => {
  //     // user.users.forEach((u:any) => {
  //     //   this.userdata.push({
  //     //     username: u.username,
  //     //     useremail: u.useremail,
  //     //     usercity: u.usercity,
  //     //   })
  //     // }
  //     // );
      
  //   });
  // }
  ngOnInit() {
    this.usr.getUser().forEach((user:any) => this.userdata = user.users);
  }

  getSl() {
    this.cnt += 1;
    return this.cnt;
  }
}
