import { Component, Output, EventEmitter } from '@angular/core';
import { DataService, Vehicle } from '../services/data.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent {
  @Output() vehicleSelected = new EventEmitter<any>();

  vehicles: Vehicle[] = [];
  selectedVehicle!: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getVehicles().subscribe(vehicles => {
      this.vehicles = vehicles;
    });
  }

  selectVehicle(vehicle: Vehicle) {
    this.selectedVehicle = vehicle.plate;
    this.vehicleSelected.emit(vehicle);
  }
}
