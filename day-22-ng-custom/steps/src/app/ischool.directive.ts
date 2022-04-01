import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[ischool]'
})
export class ISchoolDirective implements OnInit {
    @Input() ischool: any;

    constructor(private elm: ElementRef) {}

    ngOnInit() {
        this.elm.nativeElement.style.backgroundColor = this.ischool.bgcol;
        this.elm.nativeElement.style.padding = '10px';
        this.elm.nativeElement.style.margin = '10px';
        if (this.ischool.bgcol == '#000000') {
            this.elm.nativeElement.style.color = '#ffffff';
        }
    }
}