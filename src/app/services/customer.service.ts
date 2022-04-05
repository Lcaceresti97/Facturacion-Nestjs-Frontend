import { HttpClient } from '@angular/common/http';
import { Headers, Http, RequestMethod, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import { Customer } from '../model/customer';
import { AbstractCrudService } from './abstract-crud.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends AbstractCrudService<Customer, number> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.api.baseUrl}/api/v1/customers`)
  }


}
