import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
