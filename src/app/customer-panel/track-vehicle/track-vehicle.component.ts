import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { timeout } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-track-vehicle',
  templateUrl: './track-vehicle.component.html',
  styleUrls: ['./track-vehicle.component.scss'],
  animations: [
    trigger('blinkAnimation', [
      state('true', style({})),
      state('false', style({})),
      transition('false <=> true', animate('1s ease-in-out', keyframes([
        style({ visibility: 'hidden', offset: 0.5 }),
        style({ visibility: 'visible', offset: 1.0 })
        
      ]))),
    ],
 ) ],
 
})
export class TrackVehicleComponent {
  shouldBlink: boolean = false;
  readyForService:number=0;
constructor(private route:Router, private auth:AuthService){}
  ngOnInit(){
    
  }

  // Set this function to be triggered when your conditions change
  toggleBlink(shouldBlink: boolean) {
    this.shouldBlink = shouldBlink;
  }

  }
  



