import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/models/profile.model';

@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.component.html',
  styleUrls: ['./myinfo.component.css']
})
export class MyinfoComponent implements OnInit {

  constructor(){
    this.userdata={name:"Mariam",email:"mariamtarek51@gmail.com",phone:"0123456789",address:"22 Miami",age:17};







  }

  userdata:Profile={
    name: '',
    email: '',
    phone: '',
    address: '',
    age: 0
  }

  ngOnInit(): void {

  }



}
