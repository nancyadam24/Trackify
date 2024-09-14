import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService, Driver } from '../services/data.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent {
  @Output() filterChanged = new EventEmitter<any>();
  
  filterForm: FormGroup;
  drivers: Driver[] = [];
  statuses = [
    { value: 'approved', viewValue: 'Εγκεκριμένο' },
    { value: 'canceled', viewValue: 'Ακυρωμένο' },
    { value: 'all', viewValue: 'Όλες' }
  ];

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.filterForm = this.fb.group({
      serialNumber: [''],
      driver: [''],
      date: [''], 
      status: ['all']
    });
  }

  ngOnInit() {
    this.dataService.getDrivers().subscribe(drivers => {
      this.drivers = drivers;
    });
  }

  onSearch() {
    const filters = this.filterForm.value;
    console.log('Search Form Values:', filters);
    this.filterChanged.emit(filters);
  }

  onReset(): void {
    location.reload(); 
  }
  
}
