import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  correctAns = new BehaviorSubject<number>(0)
  constructor() { }

  change(value1:any){
    this.correctAns.next(value1)
  }
}
