import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavContentComponent } from './components/sidenav-content/sidenav-content.component';
import { SublevelAComponent } from './components/sublevel-a/sublevel-a.component';
import { SublevelBComponent } from './components/sublevel-b/sublevel-b.component';
import { SublevelCComponent } from './components/sublevel-c/sublevel-c.component';
import { ProductsComponent } from './components/products/products.component';

const appRouter:Routes=[
  {path:'productos/:id', component: ProductsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SidenavContentComponent,
    SublevelAComponent,
    SublevelBComponent,
    SublevelCComponent,
    ProductsComponent
  ],
  imports: [
    RouterModule.forRoot(appRouter),
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
