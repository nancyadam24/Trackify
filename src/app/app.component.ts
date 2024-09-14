import { Component, OnInit } from '@angular/core';
import { DataService, Record, Vehicle } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedVehicle: Vehicle | null = null;
  allRecords: Record[] = [];
  filteredRecords: Record[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Fetch all records initially
    this.dataService.getRecords().subscribe(records => {
      this.allRecords = records;
      this.filteredRecords = records; 
    });
  }

  onVehicleSelected(vehicle: Vehicle) {
    this.selectedVehicle = vehicle;
    this.filterRecords();
  }

  onFilterChanged(filters: any) {
    this.filterRecords(filters);
  }

  filterRecords(filters: any = {}) {
    this.filteredRecords = this.allRecords
      .filter(record => !this.selectedVehicle || record.plate === this.selectedVehicle.plate)
      .filter(record => {
        if (filters.serialNumber && !record.serialNumber.includes(filters.serialNumber)) {
          return false;
        }
  
        if (filters.driver && record.fullName.toLowerCase().indexOf(filters.driver.toLowerCase()) === -1) {
          return false;
        }

        if (filters.date) {
          const filterDate = new Date(filters.date);
          const recordDate = new Date(record.issueDate);
  
          if (filterDate.toDateString() !== recordDate.toDateString()) {
            return false;
          }
        }
  
        if (filters.status && filters.status !== 'all') {
          if (filters.status === 'approved' && !record.isApproved) return false;
          if (filters.status === 'canceled' && record.isApproved) return false;
        } else if (!filters.status) {
          if (!record.isApproved) return false;
        }
  
        return true;
      });
  }  
}
