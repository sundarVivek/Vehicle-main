import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { AddService } from 'src/app/add.service';

@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.component.html',
  styleUrls: ['./view-service.component.scss']
})
export class ViewServiceComponent {
  id: any;
  userData: any;
  searchText: any;
  showErrorMessage: boolean = false;

  constructor(private addService: AddService,
    private route: Router,
    private router: ActivatedRoute,
    private toastr: ToastrService
  ) { }
  ngOnInit() {
    if (this.loadVehicleService() == null) {
      this.showErrorMessage = true;
    }else{
      this.loadVehicleService();
      this.id = this.router.snapshot.params['id'];
    }
  }
  loadVehicleService() {
    this.addService.getVehicleService().subscribe((res: any) => {
      this.userData = res;
      console.log(this.userData);
    });
  }

  editService(id: any) {
    this.route.navigate(['/edit-service', id]);
  }

  deleteService(id: any) {
    this.addService.deleteVehicleService(id).subscribe((res: any) => {
      this.toastr.success('Deleted successfully');
      this.loadVehicleService();
    })
  }

  details(id: any) {
    this.route.navigate(['/view-service-details', id]);
  }
}
