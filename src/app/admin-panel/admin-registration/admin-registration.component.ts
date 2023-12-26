import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.scss']
})
export class AdminRegistrationComponent {
  adminLogin!: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.adminLogin = this.fb.group({
      username: ['', Validators.required],
      access_key: ['', Validators.required],
      company_email: ['', Validators.email],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      phone_number: ['', Validators.required],
    })
  }
  onSubmit() {

  }
}
