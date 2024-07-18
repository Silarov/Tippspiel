import {Component, OnInit} from '@angular/core';
import {Driver, DriverService} from "../../service/driver.service";
import {NgForOf} from "@angular/common";
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    NgForOf,
    NgSelectModule,
    FormsModule
  ],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss'
})
export class TablesComponent implements OnInit {
  drivers: Driver[] = [];
  selectedDrivers: (Driver | null)[] = Array(20).fill(null);

  constructor(private driverService: DriverService) {}

  ngOnInit(): void {
    this.driverService.getDrivers().subscribe(drivers => {
      this.drivers = drivers;
    });
  }

  isDriverSelected(driver: Driver): boolean {
    return this.selectedDrivers.includes(driver);
  }

  onSelectDriver(index: number, driverName: string): void {
    const driver = this.drivers.find(d => d.name === driverName) || null;
    this.selectedDrivers[index] = driver;
  }

  getDriverName(index: number): string {
    return this.selectedDrivers[index]?.name ?? '';
  }
}
