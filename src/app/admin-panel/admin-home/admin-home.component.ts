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
    Label:string[]=['Mon','Tues','Wed','Thur','Fri'];
  // dayLabel:string[]=['Mon','Tues','Wed','Thur','Fri'];
  monthLabel:string[]=['Jan','Feb','Mar','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];
  // yearLabel:number[]=[2021,2022,2023,2024];
  dayData:number[]=[10,20,30,40,50];
  filterValue:string='';
  readyForService: number = 0;
  pendingService: number = 0;
  readyForDelivery:number=0;
  completedService: number = 0;
  data: any = [];

  ngOnInit() {
    this.generateChart();
    this.addService.getVehicleService().subscribe((res: any) => {
      this.data = res;
      this.countByStatus();
    });
    
  }

  countByStatus(){
    this.readyForService = this.data.filter((x: any) => x.status === 'ready_for_service').length;
    console.log('Number of required:', this.readyForService);
    this.pendingService = this.data.filter((x: any) => x.status === 'Service in progress').length;
    console.log('Number of required:', this.pendingService);
    this.readyForDelivery = this.data.filter((x: any) => x.status === 'Ready for delivery').length;
    console.log('Number of required:', this.readyForDelivery);
    this.completedService = this.data.length;
    console.log('Number of required:', this.completedService);
  }
generateChart(){
  this.chart = document.getElementById('myChart');
  new Chart(this.chart, {
    type: 'bar',
    data: {
      // labels: ['Jan','Feb','Mar','April','May','June','July','Aug','Sep','Oct','Nov','Dec'],
      labels:this.Label,
      datasets: [{
        label: '# of services',
        data:this.dayData,
        // data: ['10','20','30','40','50'],
      backgroundColor: 'brown',
      borderColor:'black',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
}
updateChart() {
  alert(this.filterValue);
  console.log('filter value',this.filterValue)
  if(this.filterValue==='Month'){
    this.Label=this.monthLabel;
    console.log(this.Label);
    this.generateChart();
  }
}
}



