import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit{

  constructor(private service:ContactService, private router:Router) { }

  contacts : Contact[] = [ ];
  delMsg:string="";

  ngOnInit():void{
    this.getContacts();
  }

  getContacts() {
    this.service.getContacts().subscribe(response => {
      this.contacts = response; 
    })
  }

  editContacts(id:number) {
    this.router.navigate(['/contactedit', id]);
  }

  deleteContact(id:number) {
    this.service.deleteById(id).subscribe(response => {
      this.delMsg=response;
      this.getContacts();
    });
    
  }
}
