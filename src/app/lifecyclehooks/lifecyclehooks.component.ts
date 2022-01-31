import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent implements OnInit,OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    console.log("oninit terminated")
  }

  ngOnInit(): void {
    console.log("oninit works fine")
  }

}
