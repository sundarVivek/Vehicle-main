import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { AddService } from 'src/app/add.service';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.scss']
})
export class EditServiceComponent {
  editServiceForm!: FormGroup;
  show: boolean = false;
  id: any;
  serviceArray: any;
  submitted: boolean = false;
  constructor(private fb: FormBuilder, private servicedata: AddService, private router: ActivatedRoute) {
  }

  ngOnInit() {
    // this.id=this.router.paramMap.subscribe(params => {
    //   console.log(params.get('id'));
    // });
    this.id = this.router.snapshot.params['id'];
    this.editServiceForm = this.fb.group({
      customer_name: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
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
    
    this.servicedata.getServiceById(this.id).pipe(first()).subscribe(x => this.editServiceForm.patchValue(x));
    console.log(this.id);
  }
  get f() {
    return this.editServiceForm.controls;
  }
  changeRadio() {
    console.log(this.editServiceForm.get('radiobutton')?.value);
    if (this.editServiceForm.get('radiobutton')?.value == 'yes') {
      this.show = true;
      this.editServiceForm.get('complaintbox1')?.setValidators(Validators.required);
      this.editServiceForm.get('complaintbox2')?.setValidators(Validators.required);
      this.editServiceForm.get('complaintbox3')?.setValidators(Validators.required);
      this.editServiceForm.get('complaintbox4')?.setValidators(Validators.required);

    }
    else {
      this.show = false;
      this.editServiceForm.get('complaintbox1')?.clearValidators();
      this.editServiceForm.get('complaintbox1')?.updateValueAndValidity();
      this.editServiceForm.get('complaintbox2')?.clearValidators();
      this.editServiceForm.get('complaintbox2')?.updateValueAndValidity();
      this.editServiceForm.get('complaintbox3')?.clearValidators();
      this.editServiceForm.get('complaintbox3')?.updateValueAndValidity();
      this.editServiceForm.get('complaintbox4')?.clearValidators();
      this.editServiceForm.get('complaintbox4')?.updateValueAndValidity();
    }
  }
  onSubmit() {
    // if (this.editServiceForm.valid) {
    // console.log(this.editServiceForm.value);
    // this.servicedata.sendServiceData(this.editServiceForm.value).subscribe(res=>{
    //   alert('data updated successfully');
    // });
    this.servicedata.updateService(this.id, this.editServiceForm.value).pipe(first()).subscribe(res => {
      alert('data updated successfully');
    })



  }
}
