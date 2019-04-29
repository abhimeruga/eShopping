import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public users = [];
public username ='';
public password = '';
  constructor(private usersService:UsersService,private router: Router) { }

  ngOnInit() {
    this.users = this.usersService.users;
  }
  login(username , password){
    for(let element=0; element<this.users.length ; element++)
       {
          if(username === this.users[element].username && password === this.users[element].password){
            console.log('true');
            this.router.navigate(['/productPage']);
            if(this.users[element].isAdmin === true)
            {
              this.usersService.isAdmin = true;
            }
            else
            {this.usersService.isAdmin = false;}

            break;
          }
          else{
            console.log('false');
          }


    }
  }

}
