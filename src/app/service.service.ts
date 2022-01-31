import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  db(){
    console.log("services")
  }

  name="";


  abc(myname:any){
    console.log("Hi My Name is from service  : "+myname)
    this.name=myname;
    
  }

}

