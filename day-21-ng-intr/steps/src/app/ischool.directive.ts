import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    // selector: 'ischool'
    // selector: '.ischool'
    selector: '[ischool]'
})
export class ISchoolDirective implements OnInit {
    @Input() ischool: any;

    constructor(private elm: ElementRef) {}

    ngOnInit() {
        // this.elm.nativeElement.innerHTML = '<p>Hello From iSchool India</p>';
        
        this.ischool = JSON.parse(this.ischool);
        // this.elm.nativeElement.style.backgroundColor = this.ischool.bgcol;
        let template = this.elm.nativeElement.innerHTML;
        this.elm.nativeElement.outerHTML = `<${this.ischool.tagtype} style="background-color:${this.ischool.bgcol}; color: ${this.ischool.txtcol}">
                                                ${template}
                                            <${this.ischool.tagtype}>`
    }
}