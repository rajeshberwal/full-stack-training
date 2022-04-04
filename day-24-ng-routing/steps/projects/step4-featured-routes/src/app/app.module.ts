import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { HeroModule } from './hero.module';
import { MovieModule } from './movie.module';
import { MoviesService } from './movies.service';

@NgModule({
  declarations: [ AppComponent, WelcomeComponent ],
  imports: [ BrowserModule, RouterModule.forRoot([
    { path:"**", component: WelcomeComponent }
  ]), HeroModule, MovieModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
