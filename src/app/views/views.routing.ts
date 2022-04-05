import { Routes } from "@angular/router";
import { CustomerComponent } from "./customer/customer.component";
import { InvoicesDetailsComponent } from "./invoices-details/invoices-details.component";
import { InvoicesComponent } from "./invoices/invoices.component";
import { ProductsComponent } from "./products/products.component";


export const ViewsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'customers',
                component: CustomerComponent
            },
            {
                path: 'invoices',
                component: InvoicesComponent
            },
            {
                path: 'invoices-details',
                component: InvoicesDetailsComponent
            },
            {
                path: 'products',
                component: ProductsComponent
            }
        ]
    }
];
