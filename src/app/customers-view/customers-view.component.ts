import {Component} from '@angular/core';
import {Customer} from '../models/customer';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {CustomerRemove} from '../customer.actions';
@Component({
  selector: 'app-customers-view',
  templateUrl: './customers-view.component.html',
  styleUrls: ['./customers-view.component.css']
})
export class CustomersViewComponent {
  customers: Observable<Customer[]>;
  constructor(private store: Store<{ customers: Customer[] }>) {
    this.customers = store.pipe(select('customers'));
  }

  removeCustomer(customerIndex) {
    this.store.dispatch(new CustomerRemove(customerIndex));
  }
}
