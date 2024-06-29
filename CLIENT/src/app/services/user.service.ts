import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/Message.model';

@Injectable()

export class UserService {
   baseUrl="https://jsonplaceholder.typicode.com"
  constructor(private http: HttpClient) { }

  getUserList():Observable<Message[]>{
   return this.http.get<Message[]>(`${this.baseUrl}/posts`)
  }

 
  insertMessage(message:Message){
   return this.http.post<Message>(`${this.baseUrl}/posts`,message)
  }
}
