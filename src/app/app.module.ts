import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';

import { RouterModule, Routes } from '@angular/router';

import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavContentComponent } from './components/sidenav-content/sidenav-content.component';
import { SublevelAComponent } from './components/sublevel-a/sublevel-a.component';
import { SublevelBComponent } from './components/sublevel-b/sublevel-b.component';
import { SublevelCComponent } from './components/sublevel-c/sublevel-c.component';
import { ProductsComponent } from './components/products/products.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const appRouter:Routes=[
  {path:'productos/:id', component: ProductsComponent},
  {path:'',component:WelcomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SidenavContentComponent,
    SublevelAComponent,
    SublevelBComponent,
    SublevelCComponent,
    ProductsComponent,
    WelcomeComponent,
  ],
  imports: [
    RouterModule.forRoot(appRouter),
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
