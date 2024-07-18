// src/app/services/driver.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Driver {
  name: string;
  number: number;
  country: string;
  team: string;
  wins: number;
  podiums: number;
}

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private driversUrl = 'assets/drivers.json'; // URL to your JSON file

  constructor(private http: HttpClient) {}

  getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(this.driversUrl);
  }
}
