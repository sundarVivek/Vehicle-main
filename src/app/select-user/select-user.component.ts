import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.scss']
})
export class SelectUserComponent {
  cardValue: any;
  constructor(private route:Router){}
ngOnInit(){

}
goLogin(){
  if(this.cardValue=1){
    this.route.navigate(['/admin-login']);
  }
  else{
    this.route.navigate(['/login']);
  }   

}
}
