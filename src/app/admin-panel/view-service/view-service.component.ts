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
  id:any;
  serviceData:any=[];
  userData:any;
  showBtn:boolean=false;
  username:any;
  password:any;
  constructor(private addService:AddService, private route:Router, private auth:AuthService, private router:ActivatedRoute){}
ngOnInit(){
this.username=sessionStorage.getItem('username');
this.password=sessionStorage.getItem('password');
// if(this.username==='admin'&&this.password==='admin@123'){
// this.showBtn=true;
// }else{
//   this.showBtn=false;
// }
if(this.username==='admin'&&this.password==='admin@123'){
this.showBtn=true;
}else{
this.showBtn=false;
}
  this.id = this.router.snapshot.params['id'];
 this.addService.getService().subscribe(( res:any)=>{
 this.serviceData=res;
 });
//  this.auth.getUser().subscribe(
//   (result: any) => {
//     const user: any = result.find((a: any) => {
//      this.username=a.owner_name;
//      this.password=a.vehicle_no;
//      if(this.username==='admin'&&this.password==='admin@123'){
//       this.showBtn=true;
//      }
//      else{
//       this.showBtn=false;
//      }
//     });
//   }
// )
//  this.auth.getUserBYId(this.id).subscribe(res=>{
//   this.userData=res;
//   if(this.userData.owner_name!=='admin'){
//     this.showBtn=false;
//   }
//   else{
//     this.showBtn=true;
//   }
//  });
}
editService(row:any){
this.route.navigate(['/edit-service',row]);
}
deleteService(id:any){
this.addService.deleteService(id).pipe(first()).subscribe(()=>{
  this.serviceData=this.serviceData.filter((x:any)=> x.id!==id);
});
alert('deleted successfully')
}
details(row:any){
  this.route.navigate(['/change-status']);
}
}
