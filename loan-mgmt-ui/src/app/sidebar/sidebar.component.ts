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
      name: 'Home',
      icon: 'fa-solid fa-house',
      link: 'home'
    },
    {
      id: '2',
      name: 'Analytics',
      icon: 'fa-solid fa-chart-line',
      link: 'home'
    },

    {
      id: '3',
      name: 'Products',
      icon: 'fa-solid fa-box',
      link: 'home'
    },
    {
      id: '4',
      name: 'Order',
      icon: 'fa-solid fa-cart-shopping',
      link: 'home'
    },
    {
      id: '5',
      name: 'Settings',
      icon: 'fa-solid fa-gear',
      link: 'home'
    },
    {
      id: '6',
      name: 'About',
      icon: 'fa-solid fa-circle-info',
      link: 'home'
    },
    {
      id: '7',
      name: 'Contact',
      icon: 'fa-solid fa-phone',
      link: 'home'
    },
  ];
  sideNavStatus: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
