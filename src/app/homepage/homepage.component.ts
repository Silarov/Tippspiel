import { Component } from '@angular/core';
import {HomeTableComponent} from "./home-table/home-table.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    HomeTableComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
