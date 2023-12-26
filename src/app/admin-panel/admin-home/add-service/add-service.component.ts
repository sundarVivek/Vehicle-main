import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddService } from 'src/app/add.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent {
  addServiceForm!: FormGroup;
  show: boolean = false;
  submitted:boolean=false;
  constructor(private fb: FormBuilder, private servicedata: AddService) { }

  ngOnInit() {
    this.addServiceForm = this.fb.group({
      customer_name: ['',Validators.compose([Validators.required,Validators.minLength(2)]) ],
      contact: ['', Validators.required],
      vehicle_no: ['', Validators.required],
      model_name: ['', Validators.required],
      appointment_date: ['', Validators.required],
      service_type: ['', Validators.required],
      radiobutton: ['', Validators.required],
      complaintbox1: ['', Validators.required],
      complaintbox2: ['', Validators.required],
      complaintbox3: ['', Validators.required],
      complaintbox4: ['', Validators.required],
    });
  }
  get f(){
    return this.addServiceForm.controls;
  }
  changeRadio() {
    console.log(this.addServiceForm.get('radiobutton')?.value);
    if (this.addServiceForm.get('radiobutton')?.value == 'yes') {
      this.show = true;
      this.addServiceForm.get('complaintbox1')?.setValidators(Validators.required);
      this.addServiceForm.get('complaintbox2')?.setValidators(Validators.required);
      this.addServiceForm.get('complaintbox3')?.setValidators(Validators.required);
      this.addServiceForm.get('complaintbox4')?.setValidators(Validators.required);

    }
    else {
      this.show = false;
      this.addServiceForm.get('complaintbox1')?.clearValidators();
      this.addServiceForm.get('complaintbox1')?.updateValueAndValidity();
      this.addServiceForm.get('complaintbox2')?.clearValidators();
      this.addServiceForm.get('complaintbox2')?.updateValueAndValidity();
      this.addServiceForm.get('complaintbox3')?.clearValidators();
      this.addServiceForm.get('complaintbox3')?.updateValueAndValidity();
      this.addServiceForm.get('complaintbox4')?.clearValidators();
      this.addServiceForm.get('complaintbox4')?.updateValueAndValidity();
    }
  }
  onSubmit() {
    this.submitted=true;
    if (this.addServiceForm.valid) {
      console.log(this.addServiceForm.value);
      this.servicedata.sendServiceData(this.addServiceForm.value).subscribe(res=>{
        alert('data added successfully')
      });

    }

  }
}
