import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeaturesComp } from './features.component';
import { FooterComp } from './footer.component';
import { HeaderComp } from './header.component';
import { HeroComp } from './hero.component';
import { MainComp } from './main.component';
import { MarketingContainerComp } from './marketing-container.component';
import { MarketingRowComp } from './marketing-row.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComp,
    HeroComp,
    MainComp,
    MarketingRowComp,
    MarketingContainerComp,
    FeaturesComp,
    FooterComp
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
