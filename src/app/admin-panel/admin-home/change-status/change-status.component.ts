import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddService } from 'src/app/add.service';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.scss']
})
export class ChangeStatusComponent {
  id:any;
  serviceId:any;
  vehicleNo:any;
  owner:any;
  model:any;
  date:any;
  contact:any;
  serviceType:any;
constructor(private addService:AddService, private router:ActivatedRoute){}

ngOnInit(){
  this.id=this.router.snapshot.params['id'];
  this.addService.getServiceById(this.id).subscribe(x=>{
    console.log(x);
    this.serviceId=x.id;
    this.vehicleNo=x.vehicle_no;
    this.owner=x.customer_name;
    this.model=x.model_name;
    this.date=x.appointment_date;
    this.contact=x.contact;
    this.serviceType=x.service_type;
    this.serviceId=x.id;
    
  })

  }

}
