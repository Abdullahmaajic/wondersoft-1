import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';
// import { BehaviorSubject } from 'rxjs';
// import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private send1:CartserviceService) { }
 

  ngOnInit(): void {
    this.result= this.send1.correctAns
    // this.count = this.send.correctAns.getValue()
    // this.change(this.count)
    
  }
  result!:any;
  // count!:number;
  // change(newvalue:any){
  //   this.count = newvalue
  //   // console.log(newvalue)
  //   this.returnVal.next(newvalue)
  //   // console.log(this.returnVal.next(newvalue))
    
  // }
}
