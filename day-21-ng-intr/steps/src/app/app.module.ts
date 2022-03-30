import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GridComp } from './grid.component';
import { HeaderComp } from './header-component';
import { HeroDataService } from './hero.services';
import { GenPipe } from './gen.pipe';
import { ISchoolDirective } from './ischool.directive';

@NgModule({
  declarations: [
    AppComponent,
    GridComp,
    HeaderComp,
    GenPipe,
    ISchoolDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ HeroDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
