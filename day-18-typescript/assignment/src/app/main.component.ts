import { Component } from "@angular/core";

@Component({
    selector: 'app-main',
    template: `
        <main>
            <app-hero></app-hero>
            <app-marketing-container></app-marketing-container>
            <app-footer></app-footer>
        </main>
    `
})
export class MainComp {

}