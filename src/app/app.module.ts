import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent] // look for the AppComponent in the component.ts file
})

// @NgModule decorator:
// pass in a metadata object
// object properties:
// 1. declarations: array where we specify directives, components, files
//  which belong to the angular module
// 2. imports: array where we list the external modules required for the application
// 3. providers array: list all services for angular application
// 4. bootstrap array: specify the components that angular should load when AppModule is loaded
//  whatever component specified in the bootstrap property get loaded whenever the app module loads
//   

export class AppModule { }

