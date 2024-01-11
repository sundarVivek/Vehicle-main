import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerWebApiUrl: any = "http://localhost:5121/api/auth";


  constructor(private http: HttpClient) { }

  postCustomer(customerDetails: any) {
    return this.http.post(this.customerWebApiUrl, customerDetails)
  }
  getCustomer() {
    return this.http.get(this.customerWebApiUrl)
  }
}

