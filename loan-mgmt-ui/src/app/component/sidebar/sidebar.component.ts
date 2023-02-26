import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  list = [
    {
      id: '1',
      name: 'Dashboard',
      icon: 'fa-solid fa-house',
      link: 'home'
    },
    {
      id: '2',
      name: 'Loans',
      icon: 'fa-sharp fa-solid fa-sack-dollar',
      link: 'home'
    },

    {
      id: '3',
      name: 'Customers',
      icon: 'fa-solid fa-users',
      link: 'home'
    },
    {
      id: '4',
      name: 'Payments',
      icon: 'fa-solid fa-wallet',
      link: 'home'
    },
    {
      id: '5',
      name: 'Invoices',
      icon: 'fa-solid fa-money-bill',
      link: 'home'
    },
    {
      id: '6',
      name: 'Loan Planner',
      icon: 'fa-solid fa-credit-card',
      link: 'home'
    },
    {
      id: '7',
      name: 'Reports',
      icon: 'fa-solid fa-chart-line',
      link: 'home'
    },
    {
      id: '5',
      name: 'Settings',
      icon: 'fa-solid fa-gear',
      link: 'home'
    },
  ];
  sideNavStatus: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
