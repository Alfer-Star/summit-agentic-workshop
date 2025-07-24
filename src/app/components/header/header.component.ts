import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="app-header">
      <h1>S&N Summit DEMO</h1>
      <div class="header-actions">
        <button class="btn btn-icon">
          <i class="icon">🌐</i>
        </button>
        <button class="btn btn-icon">
          <i class="icon">👤</i>
        </button>
      </div>
    </header>
  `,
  styles: [`
    .app-header {
      background-color: white;
      padding: 16px 24px;
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      h1 {
        font-size: 1.5rem;
        color: #333;
      }
    }

    .header-actions {
      display: flex;
      gap: 12px;
    }

    .btn-icon {
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      border-radius: 50%;
      transition: background-color 0.2s;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  `]
})
export class HeaderComponent {}