import { Component, Input } from "@angular/core";
import { HeroDataService } from "./hero.services";

@Component({
    selector: 'app-header',
    template: `\
        <h2>App Version: {{ compVersion }}</h2>
        <ul class="nav nav-tabs justify-content-center">
            <li class="nav-item" *ngFor="let hero of compData">
                <a class="nav-link" href="">{{ hero.title }}</a>
            </li>
        </ul>
    `
})
export class HeaderComp {
    // @Input() compData: any;
    compData: any;
    compVersion: any;

    // hds: HeroDataService = new HeroDataService()
    // constructor() {
    //     this.compData = this.hds.getData();
    //     this.compVersion = this.hds.getAppVersion();
    // }

    constructor(private hds: HeroDataService) {
        // this.compData = this.hds.getData();
        this.compVersion = this.hds.getAppVersion();
        this.hds.getData().subscribe(res => this.compData = res);
    }
}