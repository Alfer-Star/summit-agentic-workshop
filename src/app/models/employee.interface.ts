export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  street: string;
  location: string;
  age: number;
  position: string;
  team: string;
  department: string;
}

export type ListType = 'Employees' | 'Positions' | 'Teams' | 'Departments';