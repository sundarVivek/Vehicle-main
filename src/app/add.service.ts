import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  id:any;
  apiUrlService:any="http://localhost:3000/service";

  constructor(private httpForAdd:HttpClient) { }

  sendServiceData(serviceValue:any){
    return this.httpForAdd.post(this.apiUrlService,serviceValue);
  }
  getService(){
   return this.httpForAdd.get(this.apiUrlService);
  }
  getServiceById(id:any){
    // this.id=id;
    return this.httpForAdd.get<any>(`${this.apiUrlService}/${id}`);
    // return this.httpForAdd.get<any>(this.apiUrlService+'/'+this.id.value);
  }
  updateService(id:any,serviceValue:any){
return this.httpForAdd.put(`${this.apiUrlService}/${id}`,serviceValue);
  }
  deleteService(id:any){
return this.httpForAdd.delete(`${this.apiUrlService}/${id}`);
  }

}
