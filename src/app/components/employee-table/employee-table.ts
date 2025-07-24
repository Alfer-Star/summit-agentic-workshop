
import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../services/employee';
import { Employee } from '../../models/employee.interface';

@Component({
  selector: 'app-employee-table',
  imports: [CommonModule],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.scss'
})
export class EmployeeTableComponent {
  employees = computed(() => this.employeeService.getEmployees()());
  selectedEmployee = computed(() => this.employeeService.getSelectedEmployee()());

  constructor(private employeeService: EmployeeService) {}

  onSelectEmployee(employee: Employee): void {
    this.employeeService.setSelectedEmployee(employee);
  }
}

