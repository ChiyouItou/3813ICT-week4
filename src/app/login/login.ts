import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {


  email: string = '';

  password: string = '';

  errorMessage: string = '';


  // hard coded users
  users = [
    {
      email: "admin2@gmail.com",
      password: "123456"
    },
    {
      email: "user2@gmail.com",
      password: "password"
    },
    {
      email: "admin@gmail.com",
      password: "admin123"
    }
  ];


  constructor(private router: Router) {

  }



  login(){

    const user = this.users.find(
      u => 
      u.email === this.email &&
      u.password === this.password
    );


    if(user){

      // login successful
      this.router.navigate(['/profile']);

    }
    else{

      // login failed
      this.errorMessage = "Invalid email or password";

    }

  }

}