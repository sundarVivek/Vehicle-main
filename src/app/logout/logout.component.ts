import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  
  isOpen: boolean = false;
  modalComponent: any;
 constructor(private route:Router, private modalService:ModalService ){}
 ngOnInit(){
}
yes(){
localStorage.removeItem('username');
this.route.navigate(['/login'])
}

openModal(): void {
  const modal = document.getElementById('myModal');
  if(modal!=null){
    modal.style.display = 'block';
    modal.style.marginTop = '200px';
    modal.style.marginLeft = '450px';
  }

}

closeModal(): void {
  const modal = document.getElementById('myModal');
  if(modal!=null){
    modal.style.display = 'none';
  }

}
}
