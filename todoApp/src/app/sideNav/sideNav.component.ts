import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sideNav',
  templateUrl: './sideNav.component.html',
  styleUrls: ['./sideNav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  loginText1: string = 'Login';

  toggleLogin1() {
    if (this.loginText1 === 'Login') {
      this.loginText1 = 'Logout';
    } else {
      this.loginText1 = 'Login';
    }

}
}
