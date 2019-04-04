import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { NewProductComponent } from './admin-panel/new-product/new-product.component';
import { SideNavComponent } from './admin-panel/side-nav/side-nav.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AdminPanelComponent, NewProductComponent, SideNavComponent, AdminLoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
