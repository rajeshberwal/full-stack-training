import { Component } from "@angular/core";

@Component({
    selector: 'app-marketing-container',
    template: `
        <div class="container marketing">
            <app-marketing-row></app-marketing-row>
            <app-features></app-features>
        </div>
    `
})
export class MarketingContainerComp {

}