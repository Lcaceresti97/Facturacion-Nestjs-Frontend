import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { PageRequest } from 'src/app/model/pagination/page-request.model';
import { Page } from 'src/app/model/pagination/page.model';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public currentPage?: Page<Product>;
  public products: Product = new Product();

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.fetchPageOfCustomer();
  }

  public nextPage(): void {
    this.fetchPageOfCustomer(this.currentPage?.next);
  }

  public prevPage(): void {
    this.fetchPageOfCustomer(this.currentPage?.previous);
  }

  private fetchPageOfCustomer(pageRequest?: PageRequest): void {
    this.productService.findAll(pageRequest)
      .pipe(take(1))
      .subscribe(page => this.currentPage = page);
  }
}
