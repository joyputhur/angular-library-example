import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutLibraryModule } from 'layout-library'
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutLibraryModule.forRoot({environment:environment})
  ],
  exports:[
    LayoutLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
