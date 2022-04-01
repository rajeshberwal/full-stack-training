import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
 
@Component({
    selector : "app-reactive-form-group",
    template : `
        <h2>Reactive Form Using FormGroup</h2>
        <form [formGroup]="userForm">
            <div class="mb-3"> 
                <label for="uname"  class="form-label">User Name</label>
                <input formControlName="username" id="uname" class="form-control">
                <span *ngIf="userForm.get('username').touched && userForm.get('username').invalid" class="form-text">Please enter your name</span>
            </div>
            <div class="mb-3"> 
                <label for="uage"  class="form-label">User Age</label>
                <input formControlName="userage" id="uage" class="form-control" type="number">
                <span *ngIf="userForm.get('userage').touched && userForm.get('userage').invalid"  class="form-text">Please enter your age, age must be between 18 - 90 years </span>
            </div>
            <div class="mb-3"> 
                <label for="umail"  class="form-label">User eMail</label>
                <input id="umail" formControlName="usermail" class="form-control">
                <span *ngIf="userForm.get('usermail').touched && userForm.get('usermail').invalid"  class="form-text">Please enter a valid email id</span>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
            <hr>
            <button (click)="generateUserName()">Generate User Name</button>
            <button (click)="generateUserData()">Generate User Date</button>
        </form>
        <p>{{ log | json }}</p>
        <ul>
            <li *ngIf="userForm.get('username').touched">User Name is Touched</li>
            <li *ngIf="userForm.get('username').untouched">User Name is Untouched</li>
            <li *ngIf="userForm.get('username').pristine">User Name is Pristine</li>
            <li *ngIf="userForm.get('username').dirty">User Name is Dirty</li>
            <li *ngIf="userForm.get('username').valid">User Name is Valid</li>
            <li *ngIf="userForm.get('username').invalid">User Name is Invalid</li>
        </ul>
        <ul>
            <li *ngIf="userForm.get('userage').touched">User Age is Touched</li>
            <li *ngIf="userForm.get('userage').untouched">User Age is Untouched</li>
            <li *ngIf="userForm.get('userage').pristine">User Age is Pristine</li>
            <li *ngIf="userForm.get('userage').dirty">User Age is Dirty</li>
            <li *ngIf="userForm.get('userage').valid">User Age is Valid</li>
            <li *ngIf="userForm.get('userage').invalid">User Age is Invalid</li>
        </ul>
        <ul>
            <li *ngIf="userForm.get('usermail').touched">User eMail is Touched</li>
            <li *ngIf="userForm.get('usermail').untouched">User eMail is Untouched</li>
            <li *ngIf="userForm.get('usermail').pristine">User eMail is Pristine</li>
            <li *ngIf="userForm.get('usermail').dirty">User eMail is Dirty</li>
            <li *ngIf="userForm.get('usermail').valid">User eMail is Valid</li>
            <li *ngIf="userForm.get('usermail').invalid">User eMail is Invalid</li>
        </ul>
        <ul>
            <li *ngIf="userForm.touched">User Form is Touched</li>
            <li *ngIf="userForm.untouched">User Form is Untouched</li>
            <li *ngIf="userForm.pristine">User Form is Pristine</li>
            <li *ngIf="userForm.dirty">User Form is Dirty</li>
            <li *ngIf="userForm.valid">User Form is Valid</li>
            <li *ngIf="userForm.invalid">User Form is Invalid</li>
        </ul>
        
    `,
    styles : [`
        input.ng-valid.ng-touched{
            border : 2px solid greenyellow
        }
        input.ng-invalid.ng-touched{
            border : 2px solid crimson
        }
    `]
})
export class ReactiveFormGroup implements OnInit{
        userForm:any;
        log:any;
 
        ngOnInit(): void {
            this.userForm = new FormGroup({
                username : new FormControl("",{
                    validators : Validators.required
                }),
                usermail : new FormControl("",{
                    validators : [Validators.required, Validators.pattern('.+@.+')]
                }),
                userage : new FormControl("",{
                    validators : [Validators.required, Validators.min(18), Validators.max(90)]
                }),
            });
 
            this.userForm.valueChanges.subscribe((res:any) => this.log = res )
        }
 
        generateUserName(){
            this.userForm.patchValue({
                username : "Bruce"
            })
        }
        generateUserData(){
            this.userForm.setValue({
                username : "Bruce",
                userage : 21,
                usermail : "bruce@wayne.com"
            })
        }
}    