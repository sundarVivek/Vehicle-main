import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  id: any;
  apiUrlService: any = "http://localhost:3000/service";
  serviceWebApiUrl: any = "https://localhost:7247/api/service";
  AddserviceWebApiUrl: any = "https://localhost:7247/api/addservices";
  private dataSubject = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  sendServiceData(serviceValue: any) {
    return this.http.post(this.apiUrlService, serviceValue);
  }
  getService() {
    return this.http.get(this.apiUrlService);
  }
  getServiceById(id: any) {
    // this.id=id;
    return this.http.get<any>(`${this.apiUrlService}/${id}`);
    // return this.http.get<any>(this.apiUrlService+'/'+this.id.value);
  }
  updateService(id: any, serviceValue: any) {
    return this.http.put(`${this.apiUrlService}/${id}`, serviceValue);
  }
  deleteService(id: any) {
    return this.http.delete(`${this.apiUrlService}/${id}`);
  }
  postVehicleService(serviceDetails: any) {
    return this.http.post(this.serviceWebApiUrl, serviceDetails)
  }
  getVehicleService() {
    return this.http.get(this.serviceWebApiUrl)
  }
  getVehicleServiceById(id:any) {
    return this.http.get<any>(`${this.serviceWebApiUrl}/${id}`);
  }
  // postVehicleService(serviceDetails: any) {
  //   return this.http.post(this.AddserviceWebApiUrl, serviceDetails)
  // }
  // getVehicleService() {
  //   return this.http.get(this.AddserviceWebApiUrl)
  // }
  // getVehicleServiceById(id:any) {
  //   return this.http.get<any>(`${this.AddserviceWebApiUrl}/${id}`);
  // }
  // sendVehicleNo(vehicleNo:string){
  //   this.dataSubject.next(vehicleNo);
  // }
  // getVehicleNo() {
  //   return this.dataSubject.asObservable();
  // }
}

