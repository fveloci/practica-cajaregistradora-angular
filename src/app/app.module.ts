import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { CashRegisterComponent } from './components/cash-register/cash-register.component';
import { CashRegisterItemComponent } from './components/cash-register-item/cash-register-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ListItemComponent,
    CashRegisterComponent,
    CashRegisterItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
