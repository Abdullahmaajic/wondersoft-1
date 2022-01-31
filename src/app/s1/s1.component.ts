import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-s1',
  templateUrl: './s1.component.html',
  styleUrls: ['./s1.component.css']
})
export class S1Component implements OnInit {

  constructor(private xyzvar:ServiceService) { }

  ngOnInit(): void {
  }
   
// name = ''
//   abc(myname:any){
//       this.xyzvar.db()
//       this.name = this.name
//   }
xyz(myname:any){
  // this.xyzvar.db();
  this.xyzvar.abc(myname);
  }

  
}
