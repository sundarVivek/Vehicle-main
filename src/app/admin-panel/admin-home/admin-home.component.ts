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
  Label: string[] = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri'];
  monthLabel: string[] = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  dayData: number[] = [10, 20, 30, 40, 50];
  filterValue: string = '';
  readyForService: number = 0;
  pendingService: number = 0;
  readyForDelivery: number = 0;
  completedService: number = 0;
  data: any = [];
  filteredData: any = [];
  filteredDateMonth: any ;
  filterdedMonth:any=[];

  ngOnInit() {
    this.generateChart();
    this.addService.getVehicleService().subscribe((res: any) => {
      this.data = res;
      this.countByStatus();
    });
  }

  countByStatus() {
    this.readyForService = this.data.filter((x: any) => x.status === 'Ready for service').length;
    console.log('Number of required:', this.readyForService);
    this.pendingService = this.data.filter((x: any) => x.status === 'Service in progress').length;
    console.log('Number of required:', this.pendingService);
    this.readyForDelivery = this.data.filter((x: any) => x.status === 'Ready for delivery').length;
    console.log('Number of required:', this.readyForDelivery);
    this.completedService = this.data.length;
    console.log('Number of required:', this.completedService);
  }
  generateChart() {
    this.chart = document.getElementById('myChart');
    new Chart(this.chart, {
      type: 'bar',
      data: {
        // labels: ['Jan','Feb','Mar','April','May','June','July','Aug','Sep','Oct','Nov','Dec'],
        labels: this.Label,
        datasets: [{
          label: '# of services',
          data: this.dayData,
          // data: ['10','20','30','40','50'],
          backgroundColor: 'brown',
          borderColor: 'black',
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
    console.log('filter value', this.filterValue)
    if (this.filterValue === 'Month') {
      this.Label = this.monthLabel;
      console.log(this.Label);
      this.generateChart();
    }
  }

  filterDataByToday() {
    const today = new Date().toISOString().split('T')[0];
    this.filteredData = this.data.filter((item: any) => item.appointment_date.split('T')[0] === today);
    this.readyForService = this.filteredData.filter((x: any) => x.status === 'Ready for service').length;
  }

  filterDataByThisWeek() {
    const today = new Date();
    const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay())).toISOString().split('T')[0];
    const lastDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 6)).toISOString().split('T')[0];
    this.filteredData = this.data.filter((item: any) => item.appointment_date.split('T')[0] >=
      firstDayOfWeek && item.appointment_date.split('T')[0] <= lastDayOfWeek);
    this.readyForService = this.filteredData.filter((x: any) => x.status === 'Ready for service').length;
  }

  filterDataByThisMonth() {
    //     User
    // Iam having array of objects from api. There is a date fieled in the object. 
    // I want to filter objects by the date of object like today week month year
    const today: Date = new Date();
    console.log("today",today)
    const currentMonth = today.getMonth().toString().split('T')[0];
    this.data.filter((item: any) =>{
      const myDates:any= new Date( item.appointment_date);
      console.log("myDates",myDates.getMonth().toString().split('T')[0]);
    }
    );

    console.log("filteredData",this.filteredData);
  }
  filterDataByThisYear() {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 1).toISOString().split('T')[0];
    console.log(startOfYear);
    const endOfYear = new Date(today.getFullYear(), 11, 31).toISOString().split('T')[0];
    console.log(endOfYear);
    // return this.data.filter((obj: any) => obj.appointment_date >= startOfYear && obj.dateField <= endOfYear);
    this.filteredData = this.data.filter((item: any) => item.appointment_date.split('T')[0] >=
      startOfYear && item.appointment_date.split('T')[0] <= endOfYear);
    console.log(this.filteredData);
    this.readyForService = this.filteredData.filter((x: any) => x.status === 'Ready for service').length;
  }
}



