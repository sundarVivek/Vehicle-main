import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AddService } from 'src/app/add.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  hide = true;
  userData: any;
  submitted = false;
  errorMessage = null;
  customerId:any;

  constructor(private fb: FormBuilder, private addService: AddService, private route: Router, private toastr: ToastrService) { }
  ngOnInit() {
    this.loginForm = this.fb.group({
      customer_name: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      VehilceNo: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$')])],

    })
  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    console.log("vahga", this.loginForm.value);
    if (this.loginForm.valid) {
      this.addService.login(this.loginForm.value).subscribe({
        next: (res: any) => {
          this.customerId=res.id;
          console.log(res);
          if (this.loginForm.controls?.['VehilceNo'].value==res.vehilceNo&&this.loginForm.controls?.['customer_name'].value==res.customer_name) {
            this.toastr.success('Login successful');
            localStorage.setItem('username',this.loginForm.value.customer_name);
            localStorage.setItem('password',this.loginForm.value.VehilceNo)
            this.route.navigate(['/track-vehicle',this.customerId])
          }
        },
      },
      )
    }else{
      this.toastr.error('Login failed');
    }
}

}