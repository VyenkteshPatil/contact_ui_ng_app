import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // findContact(id: number):Observable<any> {
  //   throw new Error('Method not implemented.');
  // }

  private baseUrl="http://localhost:8080/contact"

  constructor(private httpClient:HttpClient) { }

  findContact(id:number):Observable<Contact>{
    return this.httpClient.get<Contact>(`${this.baseUrl}/contact/${id}`)
  }

  createContact(contact:Contact):Observable<string>{
    return this.httpClient.post(`${this.baseUrl}/create`, contact, {responseType:"text"});
  }

  getContacts():Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(`${this.baseUrl}/view`);
  }

  getContactById(contactId:number):Observable<Contact>{
    return this.httpClient.get<Contact>(`${this.baseUrl}/contact/${contactId}`);
  }

  deleteById(contactId:number):Observable<string>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${contactId}`, {responseType:"text"});
  }
}
