import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { AddService } from 'src/app/add.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent {
  constructor(private addService: AddService) { }
  chart: any = [];
  readyForService: number = 0;
  pendingService: number = 0;
  readyForDelivery:number=0;
  completedService: number = 0;
  data: any = [];

  ngOnInit() {
    this.addService.getVehicleService().subscribe((res: any) => {
      this.data = res;
      this.countByStatus();
    });
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

  countByStatus(){
    this.readyForService = this.data.filter((x: any) => x.status === 'Ready for service').length;
    console.log('Number of required:', this.readyForService);
    this.pendingService = this.data.filter((x: any) => x.status === 'Service in progress').length;
    console.log('Number of required:', this.pendingService);
    this.readyForDelivery = this.data.filter((x: any) => x.status === 'Ready for delivery').length;
    console.log('Number of required:', this.readyForDelivery);
    this.completedService = this.data.length;
    console.log('Number of required:', this.completedService);
  }

}



