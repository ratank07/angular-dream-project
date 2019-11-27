import { Component, OnInit } from '@angular/core';
import { UserService } from "../../user.service";
import { User } from "../../user";
import { Router } from "@angular/router";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public usereService: UserService, public router: Router) { }

  ngOnInit() {
  }
  user = new User();
  addUser(){
    console.log('clisked to add user'+this.user)
    this.usereService.addUser(this.user).subscribe(data => {
      console.log(data);
    })
  }
  goBack(){
    this.router.navigate(['/home'])

  }
  cleartext(){
    this.user= { 
      
      "name":"",
      "passwd":"",
      "email":"",
      "username":"",
      "profile":"",
      "id": 1
  }
  }
}
