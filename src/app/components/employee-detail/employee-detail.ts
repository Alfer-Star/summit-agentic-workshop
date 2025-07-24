import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../services/employee';

@Component({
  selector: 'app-employee-detail',
  imports: [CommonModule],
  templateUrl: './employee-detail.html',
  styleUrl: './employee-detail.scss'
})
export class EmployeeDetailComponent {
  selectedEmployee = computed(() => this.employeeService.getSelectedEmployee()());

  constructor(private employeeService: EmployeeService) {}
}

