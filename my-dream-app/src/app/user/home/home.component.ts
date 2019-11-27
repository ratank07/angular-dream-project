import { Component, OnInit } from '@angular/core';
import { UserService } from "../../user.service";
import { User } from "../../user";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }
  users: User;

  getUsers(){
   this.userService.getUsers().subscribe((data:User) => {
      console.log(data);
      this.users = data;
   })
  }
  deleteUser(id){
    this.userService.deleteUser(id).subscribe((data) => {
      console.log(data);
      this.getUsers();
  })
}
}
