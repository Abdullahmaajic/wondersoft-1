import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  LoginForm = new FormGroup({
    email:new FormControl('',[Validators.required]),
    pswd:new FormControl('',[Validators.required,Validators.minLength(6)])
  })
   get email(){
     return this.LoginForm.controls
   }
   get pswd(){
    return this.LoginForm.controls
  }
}
