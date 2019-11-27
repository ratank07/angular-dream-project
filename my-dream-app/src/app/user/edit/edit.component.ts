import { Component, OnInit } from '@angular/core';
import { UserService } from "../../user.service";
import { User } from "../../user";
import { ActivatedRoute,Params,Router } from "@angular/router";
import { map } from "rxjs/operators";
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 id:number;
  constructor(public userservice: UserService, public route: ActivatedRoute, public router: Router) { 
  //console.log('id is'+)
  //  const id: number = route.snapshot.params.id;
  }

  ngOnInit() {
     this.id = this.route.snapshot.params.id
          console.log(this.id);    
     this.getUser();
  }
  user:User = new User();
  
  getUser(){
   this.userservice.getUser(this.id).subscribe((data:User)=>{
     this.user = data[0];
     console.log(this.user.name);
   })
  }

  updateUser(){
    console.log("request for update")

    this.userservice.updateUser(this.id, this.user).subscribe((data)=>{
      console.log(data);
     this.router.navigate(['/home'])
    })
  }
  goBack(){
    this.router.navigate(['/home'])

  }

}
