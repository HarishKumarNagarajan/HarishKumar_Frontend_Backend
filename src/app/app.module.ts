import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PastresultComponent } from './pastresult/pastresult.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    PastresultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
