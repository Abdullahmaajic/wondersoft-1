import { Component, OnInit } from '@angular/core';
import { ChatservService } from '../chatserv.service';

@Component({
  selector: 'app-anup',
  templateUrl: './anup.component.html',
  styleUrls: ['./anup.component.css']
})
export class AnupComponent implements OnInit {

  constructor(private cs:ChatservService) { }

  ngOnInit(): void {
  }
  msgs = [];

  send(mymsg: any) {
    console.log('my msg is ' + mymsg);
    this.msgs = this.cs.chat(mymsg);
  }
}
