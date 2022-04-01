import { NgModule } from "@angular/core";
import { ISchoolComponent } from "./ischool.component";
import { ISchoolDirective } from "./ischool.directive";
import { IschoolregionPipe } from "./ischoolregion.pipe";

@NgModule({
    declarations: [
        ISchoolComponent,
        ISchoolDirective,
        IschoolregionPipe
    ],
    exports: [
        ISchoolComponent,
        IschoolregionPipe,
        ISchoolDirective
    ]
})
export class ISchoolModule {

}