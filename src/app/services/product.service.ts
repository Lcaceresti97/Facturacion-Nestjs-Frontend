import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';
import { AbstractCrudService } from './abstract-crud.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService  extends AbstractCrudService<Product, number>{

  constructor(protected http: HttpClient) {
    super(http, `${environment.api.baseUrl}/api/v1/products`)
  }
}
