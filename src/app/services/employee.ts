import { Injectable, signal } from '@angular/core';
import { Employee, ListType } from '../models/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees = signal<Employee[]>([
    {
      id: 1,
      firstName: 'Max',
      lastName: 'Mustermann',
      street: 'Musterstrasse 1',
      location: 'Paderborn',
      age: 22,
      position: 'Junior Consultant',
      team: 'AI',
      department: 'S&N Invent'
    },
    {
      id: 2,
      firstName: 'Max',
      lastName: 'Mustermann',
      street: 'Musterstrasse 1',
      location: 'Köln',
      age: 25,
      position: 'Senior Consultant',
      team: 'Web',
      department: 'S&N Invent'
    },
    {
      id: 3,
      firstName: 'Max',
      lastName: 'Mustermann',
      street: 'Musterstrasse 1',
      location: 'Paderborn',
      age: 30,
      position: 'Team Lead',
      team: 'Mobile',
      department: 'S&N Invent'
    },
    {
      id: 4,
      firstName: 'Max',
      lastName: 'Mustermann',
      street: 'Musterstrasse 1',
      location: 'Paderborn',
      age: 28,
      position: 'Developer',
      team: 'Backend',
      department: 'S&N Invent'
    },
    {
      id: 5,
      firstName: 'Max',
      lastName: 'Mustermann',
      street: 'Musterstrasse 1',
      location: 'Paderborn',
      age: 35,
      position: 'Architect',
      team: 'Architecture',
      department: 'S&N Invent'
    }
  ]);

  private selectedEmployee = signal<Employee | null>(null);
  private selectedListType = signal<ListType>('Employees');

  getEmployees() {
    return this.employees;
  }

  getSelectedEmployee() {
    return this.selectedEmployee;
  }

  setSelectedEmployee(employee: Employee) {
    this.selectedEmployee.set(employee);
  }

  getSelectedListType() {
    return this.selectedListType;
  }

  setSelectedListType(type: ListType) {
    this.selectedListType.set(type);
  }
}
