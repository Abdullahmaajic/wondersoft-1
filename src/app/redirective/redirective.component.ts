import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-redirective',
  templateUrl: './redirective.component.html',
  styleUrls: ['./redirective.component.css'],
})
export class RedirectiveComponent implements OnInit {
  constructor() {}
  ngOnInit() {
  }

   myCondition = false;
  // mycondition=true;
// 
  fruitvalue = ""
  fruits:Array<string>=["Apple","Banana","Cikku","PineApple"];
  addfruit(fruit:any){
    this.fruits.push(fruit);
    this.fruitvalue = " "
  }
  // countryForm: FormGroup;
  clr:string = ''
  myclr(color:string){
    console.log(color);
    this.clr = color;
    if(color = ""){
      console.log(color)
      this.clr = color
    }
  }
  // 
  days:Array<string>=["Sunday","Moday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];

  // myclr(){

  // }
}
