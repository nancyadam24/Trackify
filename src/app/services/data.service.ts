import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Vehicle {
  id: number;
  plate: string;
}

export interface Driver {
  id: number;
  fullName: string;
}

export interface Record {
  serialNumber: string;
  fullName: string;
  driverId: number;
  plate: string;
  issueDate: string;
  isApproved: boolean;
  tierAmount: number;
  registrationAmount: number;
  consumptionAmount: number;
  rewardAmount: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getVehicleDetails(selectedVehicle: any) {
    throw new Error('Method not implemented.');
  }
  private vehiclesUrl = 'http://localhost:4200/assets/vehicles.json';
  private driversUrl = 'http://localhost:4200/assets/drivers.json';
  private recordsUrl = 'http://localhost:4200/assets/records.json';

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.vehiclesUrl);
  }

  getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(this.driversUrl);
  }

  getRecords(): Observable<Record[]> {
    return this.http.get<Record[]>(this.recordsUrl);
  }

}
