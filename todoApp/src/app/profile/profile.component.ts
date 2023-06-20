import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  flag=false;
  fname:string='';
  lname:string='';
  phone: number=0;
  dob:Date=new Date();
  email:string='';
  hobby:string='';
   
  displayProfile(){
       this.flag=true;
  }

}
