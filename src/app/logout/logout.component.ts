import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  isOpen: boolean = false;
  modalComponent: any;
  username:string='Sundar';
  constructor(private route: Router) { }
  ngOnInit() {
  }
  yes() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.route.navigate(['/login'])
  }

  openModal(): void {
    const modal = document.getElementById('myModal');
    if (modal != null) {
      modal.style.display = 'block';
      modal.style.marginTop = '200px';
      modal.style.marginLeft = '450px';
    }

  }

  closeModal(): void {
    const modal = document.getElementById('myModal');
    if (modal != null) {
      modal.style.display = 'none';
    }

  }
}
