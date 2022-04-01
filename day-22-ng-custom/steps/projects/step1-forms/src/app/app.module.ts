import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormBuilder } from './reactive-form-builder.component';
import { ReactiveFormGroup } from './reactive-form-group.component';
import { TemplateForm } from './template-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateForm,
    ReactiveFormGroup,
    ReactiveFormBuilder
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
