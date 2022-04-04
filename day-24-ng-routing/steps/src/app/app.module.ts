import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BatmanComponent } from './batman.component';
import { SupermanComponent } from './superman.component';
import { AquamanComponent } from './aquaman.component';
import { FlashComponent } from './flash.component';
import { WonderwomanComponent } from './wonderwoman.component';
import { CyborgComponent } from './cyborg.component';
import { NotfoundComponent } from './notfound.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BatmanComponent,
    SupermanComponent,
    AquamanComponent,
    FlashComponent,
    WonderwomanComponent,
    CyborgComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'batman', component: BatmanComponent },
      { path: 'batman/:qty/:ver', component: BatmanComponent },
      { path: 'aquaman', component: AquamanComponent },
      { path: 'cyborg', component: CyborgComponent },
      { path: 'superman', component: SupermanComponent },
      { path: 'flash', component: FlashComponent },
      { path: 'wonderwoman', component: WonderwomanComponent },
      { path: 'ironman', redirectTo: 'flash', pathMatch: 'full'   },
      { path: '**', component: NotfoundComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
