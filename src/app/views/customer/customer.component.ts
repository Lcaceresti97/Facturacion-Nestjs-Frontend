import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject, take } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { PageRequest } from 'src/app/model/pagination/page-request.model';
import { Page } from 'src/app/model/pagination/page.model';
import { CustomerService } from 'src/app/services/customer.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { DataTableDirective } from 'angular-datatables';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  @ViewChild(ModalDirective) modal!: ModalDirective;
  @ViewChild('modalInvoices') modalInvoices!: ModalDirective;
  @ViewChild(DataTableDirective)

  dtElement!: DataTableDirective;
  dtOptions: any = {};
  dtTrigger = new Subject();


  public customerItemsForm!: FormGroup;
  public currentPage?: Page<Customer>;
  public customer: Customer = new Customer();
  public action: any;
  public type = 1;

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchPageOfCustomer();

    this.customerItemsForm = new FormGroup({

      'customerName': new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
      ]),
      'customerAddress': new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
      ]),
      'customerPhone': new FormControl(null, [
        Validators.required,
        Validators.minLength(1)
      ]),
      'customerStatus': new FormControl(null, [
        Validators.required
      ])
    });
  }

  public nextPage(): void {
    this.fetchPageOfCustomer(this.currentPage?.next);
  }

  public prevPage(): void {
    this.fetchPageOfCustomer(this.currentPage?.previous);
  }

  private fetchPageOfCustomer(pageRequest?: PageRequest): void {
    this.customerService.findAll(pageRequest)
      .pipe(take(1))
      .subscribe(page => this.currentPage = page);
  }

  save() {
    this.customerService.save(this.customer)
      .subscribe(response => this.router.navigate(['']));
  }

  updateOrSave(item: any) {
    if (item != 0 && item != null && item != "") {
      this.customer = item;
      this.action = "Edit Customer";
      this.type = 2;

    } else {
      this.type = 1;
      this.action = "New Customer";
    }
    this.modal.show();
  }

  findById(customerId: number): void {
    this.customerService.findOne(customerId)
      .subscribe({
        next: (data) => {
          this.customer = data;
          console.log(data);
          console.log(this.customer.customerStatus)
        },
        error: (e) => console.error(e)
      });
      this.modalInvoices.show();
  }

  hide(): void {
    this.modal.hide();

    this.ngOnInit();
  }

  hideModalInvoice(): void {
    this.modalInvoices.hide();
    this.ngOnInit();
  }

}
