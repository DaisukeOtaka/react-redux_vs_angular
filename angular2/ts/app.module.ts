import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FizzBuzzComponent } from './fizz-buzz.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    FizzBuzzComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
