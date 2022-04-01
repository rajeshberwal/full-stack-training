import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-ischool',
    template: `
        <h2 [ischool]='{"bgcol": participant.favcol}'>{{ participant | region: participant.region }}</h2>
    `
})
export class ISchoolComponent {
    @Input() participant = {
        title: '',
        region: '',
        favcol: ''
    }
}