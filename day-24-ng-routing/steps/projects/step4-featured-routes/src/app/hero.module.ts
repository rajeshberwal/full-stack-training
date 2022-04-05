import { NgModule } from "@angular/core";
import { HeroaddComponent } from "./heroadd.component";
import { HeroeditComponent } from "./heroedit.component";
import { HerolistComponent } from "./herolist.component";
import { RouterModule } from "@angular/router";
import { HeroComponent } from "./hero.component";
import { HeroesService } from "./heroes.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[HeroaddComponent, HeroeditComponent, HerolistComponent , HeroComponent ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild([
        { path : "hero" , component:HeroComponent },
        { path : "heroes" , component:HerolistComponent },
        { path : "addhero" , component:HeroaddComponent },
        { path : "edithero" , component:HeroeditComponent }
    ])],
    exports:[HeroComponent, HeroaddComponent, HeroeditComponent, HerolistComponent],
    providers: [HeroesService]
})
export class HeroModule{

}