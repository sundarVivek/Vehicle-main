import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AddService } from 'src/app/add.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.component.html',
  styleUrls: ['./view-service.component.scss']
})
export class ViewServiceComponent {
  id: any;
  serviceData: any = [];
  userData: any;

  constructor(private addService: AddService,
    private route: Router,
    private auth: AuthService,
    private router: ActivatedRoute,
  ) { }
  ngOnInit() {
    this.loadVehicleService();
    this.id = this.router.snapshot.params['id'];
  }
  loadVehicleService() {
    this.addService.getVehicleService().subscribe((res: any) => {
      this.userData = res;
      console.log(this.userData);
    });
  }

  editService(id: any){
    this.route.navigate(['/edit-service', id]);
  }

  deleteService(id: any) {
    this.addService.deleteVehicleService(id).subscribe((res: any) => {
      alert("deleted successfully");
      this.loadVehicleService();
    })
  }

  details(id:any) {
    this.route.navigate(['/change-status',id]);
  }
}
