import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { UserService } from "../user.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: any;
  user1: any;
  constructor(public userservice: UserService) { }

  ngOnInit() {
  }

  user = new User;
  Userlogin(){
    this.user1 = {
      "username" : this.user.username,
    "passwd" : this.user.passwd
    } 
  //  console.log(` ${uname} ${passwd}`);
    this.userservice.UserLogin(this.user1).subscribe((result:any)=> {
console.log("login result"+JSON.stringify(result));
      if(result){
        this.token = result.token;
        localStorage.setItem('token', this.token);

        console.log("getting token from lov=calstorage"+localStorage.getItem('token'))
      }
    })
  }
}
