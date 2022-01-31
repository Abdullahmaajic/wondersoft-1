import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  // myusername:any

  // user(name:string,pass:string){
  //   alert(name+":"+pass)
  // }
  abc(firstname: string, lastname: string) {
    localStorage.setItem('myfirstname', firstname);
    localStorage.setItem('mylastname', lastname);
    alert('success')
  }
}
