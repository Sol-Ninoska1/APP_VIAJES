import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  pageName = 'Clientes';
  users: any = [];
  searchedUser: any;

  permission: boolean;

  constructor(
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    this.permission = true;
    console.log("hoola");
    this.getUsers().subscribe(res=>{
      console.log("Res",res)
      this.users = res;  
      this.searchedUser = this.users;    
    });
  }

  goToHome(){
    this.router.navigate(['/home'])
  }

  getUsers(){
    return this.http
    .get("assets/files/customers.json")
    .pipe(
      map((res:any) =>{
        return res.data;
      })
    )
  }

  searchCustomer(event){
    const text = event.target.value;
    this.searchedUser = this.users;
    if(text && text.trim() != ''){
      this.searchedUser = this.searchedUser.filter((user: any)=>{
        return (user.name.toLowerCase().indexOf(text.toLowerCase()) > -1);
      })
    }
  }

  doRefresh(event) {
    this.getUsers();
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }


}
