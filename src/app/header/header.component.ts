import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutComponent } from '../logout/logout.component';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private route:Router){}

}
