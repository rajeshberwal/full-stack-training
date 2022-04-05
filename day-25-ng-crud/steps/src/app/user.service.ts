import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./user.model";

@Injectable()
export class ISchoolUserService {
    constructor(private http: HttpClient) {}
    
    // READ
    getUser() {
        return this.http.get('http://localhost:5000/data')
    }

    // CREATE
    postUser(user: User) {
        return this.http.post('http://localhost:5000/add', user);
    }

    // READ TO UPDATE
    // DELETE
}