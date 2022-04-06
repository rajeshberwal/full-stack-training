import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MasterComponent } from './master.component';
import { DetailComponent } from './detail.component';
import { RouterModule } from '@angular/router';
import { HeroesService } from './heroes.service';
import { FormsModule } from '@angular/forms';
import { HeroResolverService } from './hero.resolver.service';
import { SingleHeroDataService } from './single_hero_data.service';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'list',
        component: MasterComponent,
        data: { apptitle: 'ISchool Connect Heroes Application' },
        resolve: { herodata: HeroResolverService }
      },
      { 
        path: 'hero/:selectedHeroId',
        component: DetailComponent,
        resolve: { singleherodata: SingleHeroDataService }
      }
    ])
  ],
  providers: [HeroesService, HeroResolverService, SingleHeroDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
