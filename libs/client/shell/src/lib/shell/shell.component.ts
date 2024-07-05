import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-shell',
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.css',
})
export class ShellComponent {
  isCollapsed = false;
  
  menus = [
    // {
    //   title: 'Dashboard',
    //   icon: 'dashboard',
    //   selected: false,
    //   url: 'dashboard'
    // },
    {
      title: 'Records',
      icon: 'table',
      selected: false,
      url: 'record'
    }
  ]
}
