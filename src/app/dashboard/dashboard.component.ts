import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AddressBookService } from '../addressbook.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  contacts: any = [];
  constructor(private router:Router, public service: AddressBookService) { }

  ngOnInit(): void {
    this.getAllPerson();
  }

  onAddPerson= () => {
    // this.router.navigateByUrl('/form');
    this.router.navigate(["form"]);
  }

  getAllPerson() {
    this.service.getAllContact().subscribe((data:any) => {
      console.log("data=",data.data);
      this.contacts = data.data;
    });
  }

  deleteContact(id: number) {
    this.service.deleteContactById(id).subscribe((data:any) => {
      // this.ngOnInit();
      this.getAllPerson();
    })
  }

  editContact(id: number) {
    this.router.navigate(['update',id]);
  }
}
