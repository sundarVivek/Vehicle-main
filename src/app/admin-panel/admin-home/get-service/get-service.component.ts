import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddService } from 'src/app/add.service';

@Component({
  selector: 'app-get-service',
  templateUrl: './get-service.component.html',
  styleUrls: ['./get-service.component.scss']
})
export class GetServiceComponent {
  getServiceForm!: FormGroup;
  id: any;
  user:any;
  data:any;
  constructor(private addService: AddService, private route: Router, private fb: FormBuilder) { }
  ngOnInit() {
    this.getServiceForm = this.fb.group({
      vehicleNo: ['', Validators.required],
      customer_name: ['', Validators.required],
    }
    );
  }
  onSubmit() {
    this.addService.getVehicleService().subscribe(
      (result: any) => {
       const user:any= result.find((a: any) => {
         return a.vehicleNo == this.getServiceForm.value.vehicleNo && a.customer_name == this.getServiceForm.value.customer_name;
        });
        if(user){
          this.data=user;
          this.id=this.data.id;
          console.log(this.id);
               this.route.navigate(['/change-status', this.id]);
         }
      },
     
    ),
    (error:any)=>{
      console.log(error);
    }

  }
}
