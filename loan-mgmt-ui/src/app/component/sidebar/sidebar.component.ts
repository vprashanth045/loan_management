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
      link: 'dashboard'
    },
    {
      id: '2',
      name: 'Loans',
      icon: 'fa-sharp fa-solid fa-sack-dollar',
      link: 'loans'
    },

    {
      id: '3',
      name: 'Customers',
      icon: 'fa-solid fa-users',
      link: 'customers'
    },
    {
      id: '4',
      name: 'Payments',
      icon: 'fa-solid fa-wallet',
      link: 'payments'
    },
    {
      id: '5',
      name: 'Invoices',
      icon: 'fa-solid fa-money-bill',
      link: 'invoices'
    },
    {
      id: '6',
      name: 'Loan Plans',
      icon: 'fa-solid fa-credit-card',
      link: 'loan-types'
    },
    {
      id: '7',
      name: 'Reports',
      icon: 'fa-solid fa-chart-line',
      link: 'reports'
    },
    {
      id: '8',
      name: 'Settings',
      icon: 'fa-solid fa-gear',
      link: 'settings'
    },
  ];
  sideNavStatus: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
