import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideNavOpen = true;
  title = 'loan-mgmt';
  ngOnInit(): void {
    if(window.innerWidth > 1000){
      this.sideNavOpen  = false;
    }

  }
}
