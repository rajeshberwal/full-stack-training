import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    template: `
        <h2>Hero To Edit: {{ heroToEdit }}</h2>
        <h2>Update Power To: {{ herosNewPower }}</h2>
    `
})
export class HeroEditComponent {
    heroToEdit:any;
    herosNewPower:any;
    constructor(private ar:ActivatedRoute) {}

    ngOnInit() {
        this.heroToEdit = this.ar.snapshot.params['hname'];
        // this.herosNewPower = this.ar.snapshot.params['power'];
        this.ar.params.subscribe(rparams => this.herosNewPower = rparams['power']);
    }
}