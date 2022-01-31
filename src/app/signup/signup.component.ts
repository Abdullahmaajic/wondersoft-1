import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  // check(firstname1: string, lastname1: string) {
  //   if (
  //     firstname1 == localStorage.getItem('myfirstname') &&
  //     lastname1 == localStorage.getItem('mylastname')
  //   ) {
  //     this.router.navigate(['./home']);
  //   }
  // }

  check(firstname1: string, lastname1: string) {
    localStorage.setItem('myfirstname', firstname1);
    localStorage.setItem('mylastname', lastname1);
  }
}
