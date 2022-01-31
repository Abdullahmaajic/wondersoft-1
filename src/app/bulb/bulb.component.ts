import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-bulb',
  templateUrl: './bulb.component.html',
  styleUrls: ['./bulb.component.css'],
})
export class BulbComponent implements OnInit {
  constructor(private send: CartserviceService) {}

  ngOnInit(): void {
    this.count = this.send.correctAns.getValue();
    this.change(this.count);
  }

  count!: number;
  returnVal: any;
  change(newvalue: any) {
    this.count = newvalue;
    this.send.change(newvalue);
    console.log(this.count);
  }

  // 
  bulb!: boolean;
  change1() {
    this.bulb = !this.bulb;
  }
  // 
  
}
