import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router'
import { RouterModule } from '@angular/router'
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { NewProductComponent } from './admin-panel/new-product/new-product.component';
import { SideNavComponent } from './admin-panel/side-nav/side-nav.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ProductListComponent } from './admin-panel/product-list/product-list.component';



@NgModule({
  imports: [BrowserModule, RouterModule.forRoot([
    { path: "", component: AdminPanelComponent },
  ]), FormsModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  declarations: [AppComponent, HelloComponent, AdminPanelComponent, NewProductComponent, SideNavComponent, AdminLoginComponent, ProductListComponent],
  bootstrap: [AppComponent]

})
export class AppModule { }
