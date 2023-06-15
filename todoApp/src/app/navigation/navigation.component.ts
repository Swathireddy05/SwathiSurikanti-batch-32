import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  loginText: string = 'Login';

  toggleLogin() {
    if (this.loginText === 'Login') {
      this.loginText = 'Logout';
    } else {
      this.loginText = 'Login';
    }

}
}
