import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewsRoutes } from './views.routing';
import { CustomerComponent } from './customer/customer.component';
import { ProductsComponent } from './products/products.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoicesDetailsComponent } from './invoices-details/invoices-details.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { KeysPipe } from './customer/objToArray';





@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ViewsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ModalModule.forRoot()
  ],
  declarations: [
    CustomerComponent,
    ProductsComponent,
    InvoicesComponent,
    InvoicesDetailsComponent,
    KeysPipe
  ]
})
export class ViewsModule { }
