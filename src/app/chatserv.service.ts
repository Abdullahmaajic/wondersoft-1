import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatservService {

  constructor() { }

chatmsgs:any=[]

chat(chats:any){
this.chatmsgs.push(chats)

return this.chatmsgs
}


}
