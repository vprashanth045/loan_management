import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import {  } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Output() sideNavClicked = new EventEmitter<boolean>();
  sideNavOpen = true;
  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth > 1000){
      this.sideNavOpen  = false;
    }
  }

  toggleSideNav (){
    this.sideNavOpen = !this.sideNavOpen;
    this.sideNavClicked.emit(this.sideNavOpen);
  }
}
