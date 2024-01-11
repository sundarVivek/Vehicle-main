import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, concatMap, from } from 'rxjs';
import { AddService } from 'src/app/add.service';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.scss']
})
export class ChangeStatusComponent {
  data:any;
  id: any;
  serviceId: any;
  vehicleNo: any;
  owner: any;
  model: any;
  date: any;
  contact: any;
  serviceType: any;
  constructor(private addService: AddService, private router: ActivatedRoute, private fb: FormBuilder) { 
  }

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    this.addService.getVehicleServiceById(id).subscribe(
      (result) => {
        this.serviceId = result.id;
        this.vehicleNo = result.vehicleNo;
        this.owner = result.customer_name;
        this.model = result.model_name;
        this.date = result.appointment_date;
        this.contact = result.contact;
        this.serviceType = result.service_type;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
    
  }
}
