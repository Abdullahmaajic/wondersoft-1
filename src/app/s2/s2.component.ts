import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-s2',
  templateUrl: './s2.component.html',
  styleUrls: ['./s2.component.css'],
})
export class S2Component implements OnInit {
  constructor(private abcvar: ServiceService) {}

  ngOnInit(): void {}
  // dbname = ''
  //   xyz(){
  //     this.abcvar.db(
  //     this.dbname = this.abcvar.name;
  //     )
  //   }

  // abc(myname:any){
  //   console.log("Hi My Name is from service  : "+myname)
  //   this.name=myname;

  // }
  name = '';

  dbservname = '';
  xyz() {
    this.abcvar.db();
    this.dbservname = this.abcvar.name;
  }
}
