import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer.model';
import { environment as env} from 'src/environments/environment.dev';
@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(
    private httpClient: HttpClient,
  ) {}

  getCustomers() {
    const url = env.CUSTOMER_BASE_URL + env.CUSTOMER.GET_ALL_CUSTOMERS;
    const a = this.httpClient.get(url);
    return a;
  }

  viewCustomer(id:string){

  }

  searchCustomer(){

  }

  editCustomer(id: string, customer: Customer) {

  }

  deleteCustomer(){

  }

  deleteMultipleCustomer() {

  }
}
