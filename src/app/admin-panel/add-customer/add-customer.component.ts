import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent {
  customerForm!: FormGroup;
  hide = true;
  userData: any;
  submitted = false;
  errorMessage=null;

  constructor(private fb: FormBuilder, private customerService: CustomerService, private route: Router, private toastr:ToastrService) { }
  ngOnInit() {
    this.customerForm = this.fb.group({
      Name: ['', Validators.required],
      Contact: ['', Validators.required],
      VehilceNo: ['', Validators.required],
    })
  }
  get f(){
    return this.customerForm.controls;
  }

  onSubmit() {
    if(this.customerForm.valid){
        // )
        this.customerService.postCustomer(this.customerForm.value).subscribe(
          result=>{
            alert('customer added successful');
         this.route.navigate(['/add-service']);
          }
        );
      }
}
}
