import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {SignInComponent} from './singn-in.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WordComponent} from './word/word.component';
import { BookComponent } from './book/book.component';
import { FormComponent } from './form/form.component' ;
import { StructComponent } from './struct/struct.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    FormComponent,
    StructComponent,
    SignInComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
