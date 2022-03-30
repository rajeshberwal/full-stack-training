import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HeroDataService {
    appVersion = 0;

    constructor(private http: HttpClient) {
        this.appVersion = Math.round(Math.random() * 10000);
    }

    getAppVersion() {
        return this.appVersion;
    }

    getData() {
        return this.http.get('http://localhost:5050');
    }
}