import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { CustomerReducer } from './customer.reducer';

import { AppComponent } from './app.component';
import { CustomersViewComponent } from './customers-view/customers-view.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersViewComponent,
    CustomerAddComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ customers: CustomerReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
