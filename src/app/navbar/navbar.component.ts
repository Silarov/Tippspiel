import {Component, inject} from '@angular/core';
import {NavigationEnd, RouterLink} from "@angular/router";
import {AppComponent} from "../app.component";
import {filter} from "rxjs";
import {Router} from "express";
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  appComponent = inject(AppComponent);
  title: string = this.appComponent.title;
  isDropdownOpen = false;
  isMobileMenuOpen = false;

  toggleMenu() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
