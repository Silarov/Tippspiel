import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { GroupTable } from "../../data/group-table.dto";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home-table',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './home-table.component.html',
  styleUrls: ['./home-table.component.scss']
})
export class HomeTableComponent {
  groups: GroupTable[] = [
    { group_guid: 'satelkj', name: 'Group A', rank: 1, points: 100 },
    { group_guid: 'asdfasdf', name: 'Group B', rank: 2, points: 90 },
    { group_guid: 'öaofje', name: 'Group C', rank: 3, points: 80 },
    { group_guid: 'aöoweijrfasd', name: 'Group D', rank: 1, points: 80 },
  ];

  searchQuery: string = '';
  sortColumn: keyof GroupTable | '' = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  openGroupMenu: string | null = null;

  get sortedGroups(): GroupTable[] {
    let filteredGroups = this.groups.filter(group =>
      group.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

    if (this.sortColumn) {
      filteredGroups.sort((a, b) => {
        const aValue = a[this.sortColumn as keyof GroupTable];
        const bValue = b[this.sortColumn as keyof GroupTable];

        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return this.sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
        } else if (typeof aValue === 'string' && typeof bValue === 'string') {
          return this.sortDirection === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        } else {
          return 0;
        }
      });
    }

    return filteredGroups;
  }

  sort(column: keyof GroupTable) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
  }

  toggleGroupMenu(groupName: string) {
    if (this.openGroupMenu === groupName) {
      this.openGroupMenu = null;
    } else {
      this.openGroupMenu = groupName;
    }
  }

  trackByGroup(index: number, group: GroupTable) {
    return group.name;
  }

  showDetails(group: GroupTable) {
    // Implement show details functionality
  }

  tipNow(group: GroupTable) {
    // Implement tip now functionality
  }

  leaveGroup(group: GroupTable) {
    // Implement leave group functionality
  }

  deleteGroup(group: GroupTable) {
    console.log(group.name);
    // Implement delete group functionality
  }

  isAdmin(): boolean {
    // Replace with your actual admin check logic
    return true;
  }
}
