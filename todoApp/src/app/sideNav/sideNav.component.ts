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

  loginText:string='Login';
  
  toggleLogin(){
     if(this.loginText==='Login'){
      this.loginText='Logout';
     }else{
      this.loginText='Login';
     }
  }

}

