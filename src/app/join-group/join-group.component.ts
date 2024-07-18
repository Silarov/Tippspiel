import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {TablesComponent} from "../group-detail/tables/tables.component";

@Component({
  selector: 'app-join-group',
  standalone: true,
    imports: [
        RouterLink,
        TablesComponent
    ],
  templateUrl: './join-group.component.html',
  styleUrl: './join-group.component.scss'
})
export class JoinGroupComponent {

}
