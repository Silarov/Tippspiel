import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, RouterLink, Router} from "@angular/router";
import {TablesComponent} from "./tables/tables.component";

@Component({
  selector: 'app-group-detail',
  standalone: true,
  imports: [
    RouterLink,
    TablesComponent
  ],
  templateUrl: './group-detail.component.html',
  styleUrl: './group-detail.component.scss'
})
export class GroupDetailComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  protected type: 'edit' | 'view' | 'new' = 'new';

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const guid = params.get('guid');
        console.log(guid)
        if (!guid) {
          return;
        }
      });

    // read the data
    this.route.data.subscribe(
      (value) => {
        console.log(value);
        if (value && value['type'] === 'edit') {
          this.type = 'edit';
        } else if (value && value['type'] === 'new') {
          this.type = 'new';
        } else if (value && value['type'] === 'view') {
          this.type = 'view';
        }

      }
    )
  }

  cancel(): void {
    this.router.navigate(['/todos']);
  }
}
