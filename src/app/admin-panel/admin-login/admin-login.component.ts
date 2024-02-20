import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  adminLogin!: FormGroup;
  errorMessage: any;
  submitted=false;
  loading:boolean=false;
  constructor(private route: Router,
    private adminService: AdminService,
     private fb: FormBuilder,
    private toastr: ToastrService) { }
  ngOnInit() {
    this.adminLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  onSubmit() {
    this.submitted=true;
    this.loading=true;
    if (this.adminLogin.valid) {
      this.adminService.getAdmin().subscribe((result: any) => {
        const admins: any = result.find((a: any) => {
          return a.username == this.adminLogin.value.username && a.password == this.adminLogin.value.password;
        })
        if (admins) {
          this.toastr.success('Login successful');
          this.route.navigate(['/admin-home'])
        } else {
          this.toastr.error('Login failed');
        }
      },
        (error: any) => {
          // Handle error
          this.errorMessage = error.message;
          console.log(this.errorMessage);
        }
      );
    }
  }

}
