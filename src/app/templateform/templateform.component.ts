import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  onsubmit(mydata:any){
    console.log("hii"+mydata)
    var data = JSON.stringify(mydata)
    localStorage.setItem('mydata',data)
  }
}
