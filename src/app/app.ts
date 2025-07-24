import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavigationComponent } from './components/side-navigation/side-navigation';
import { EmployeeTableComponent } from './components/employee-table/employee-table';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    SideNavigationComponent,
    EmployeeTableComponent,
    EmployeeDetailComponent
  ],
  template: `
    <div class="app-container">
      <app-side-navigation class="side-nav"></app-side-navigation>
      <app-employee-table class="main-content"></app-employee-table>
      <app-employee-detail class="detail-panel"></app-employee-detail>
    </div>
  `,
  styles: [`
    .app-container {
      display: grid;
      grid-template-columns: 200px 1fr 300px;
      height: 100vh;
      gap: 20px;
      padding: 20px;
    }

    .side-nav {
      background: #f5f5f5;
      border-radius: 8px;
    }

    .main-content {
      background: white;
      border-radius: 8px;
      padding: 20px;
    }

    .detail-panel {
      background: #f5f5f5;
      border-radius: 8px;
      padding: 20px;
    }
  `]
})
export class App {
  protected readonly title = signal('S&N Summit DEMO');
}
