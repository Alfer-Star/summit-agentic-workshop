import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../services/employee';
import { ListType } from '../../models/employee.interface';

@Component({
  selector: 'app-side-navigation',
  imports: [CommonModule],
  templateUrl: './side-navigation.html',
  styleUrl: './side-navigation.scss'
})
export class SideNavigationComponent {
  readonly listTypes: ListType[] = ['Employees', 'Positions', 'Teams', 'Departments'];
  selectedType = computed(() => this.employeeService.getSelectedListType()());

  constructor(private employeeService: EmployeeService) {}

  onSelectType(type: ListType): void {
    this.employeeService.setSelectedListType(type);
  }
}
