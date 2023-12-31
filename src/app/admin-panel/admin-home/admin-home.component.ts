import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent {
  constructor(private auth:AuthService) { }
  chart: any = [];
  readyForService:number=0;
 // your-component.component.ts

ngOnInit() {
  this.readyForService=this.auth.getUser.length;
  this.chart = new Chart('canvas', {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

logout() {

}


}


  
