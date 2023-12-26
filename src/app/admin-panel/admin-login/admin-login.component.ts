import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
adminLogin!:FormGroup;
  constructor(private route:Router, private auth:AuthService, private fb:FormBuilder){}
  ngOnInit(){
this.adminLogin=this.fb.group({
  username:['',Validators.required],
  password:['',Validators.required],
})
  }

}
