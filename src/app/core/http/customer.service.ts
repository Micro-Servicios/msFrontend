import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/shared/models/customer';
import apiKey from '../apiKey';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
    private utlApi="http://localhost:8181/"
  constructor(private http: HttpClient) {
    
    //this.authToken = this.tokenService.getToken();
    //this.headers = new HttpHeaders({
    //  Authorization: `Bearer ${this.authToken}`,
    //});
  }
  getCustomerListAll():Observable<Customer[]>{
      return this.http.get<Customer[]>(
        apiKey.api +
        `/ms-customer/v1/api/customer/all`
        )
  }
  getCustomerList() {
    return this.http.get<Customer[]>(
        apiKey.api +
        `/ms-customer/v1/api/customer/all`
    );
  }

  addCustomer(customer: Customer){
    return this.http.post(apiKey.api+`/ms-customer/v1/api/customer/save`,customer)
  }
}
