import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

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

  constructor(
    private router: Router,
    private http: HttpClient
  ) {

  }

  login() {
 this.http.post<any>(
    'http://localhost:3000/api/auth',
    {
      email: this.email,
      password: this.password
    }
  ).subscribe(user => {
if (user.valid) {

  localStorage.setItem(
    'user',
    JSON.stringify(user)
  );

  this.router.navigate(['/profile']);

} else {

  this.errorMessage = 'Invalid email or password';

}
    //console.log(user);

  });
  }

}