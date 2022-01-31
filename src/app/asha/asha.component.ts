import { Component, OnInit } from '@angular/core';
import { ChatservService } from '../chatserv.service';

@Component({
  selector: 'app-asha',
  templateUrl: './asha.component.html',
  styleUrls: ['./asha.component.css'],
})
export class AshaComponent implements OnInit {
  constructor(private cs: ChatservService) {}

  ngOnInit(): void {

  }
  msgs = [];

  send(mymsg: any) {
    console.log('my msg is ' + mymsg);
    this.msgs = this.cs.chat(mymsg);
  }
}
