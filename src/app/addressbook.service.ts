import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddressBookModel } from './AddressBookModel';

@Injectable({
    providedIn: 'root'
})

export class AddressBookService{
    constructor(private http:HttpClient) {}

    insertContact(contact: any) {
        return this.http.post("http://localhost:8080/home/create", contact);
    }

    getAllContact(){
        return this.http.get("http://localhost:8080/home/getAllContacts");
    }

    getContactById(id:number) {
        return this.http.get("http://localhost:8080/home/getContactById/"+id);
    }

    deleteContactById(id:number): Observable<any> {
        return this.http.delete("http://localhost:8080/home/delete/"+id);
    }

    updateEmployeeById(contact:AddressBookModel,id:number){
        return this.http.put("http://localhost:8080/home/update/"+id,contact);
    }
   
}