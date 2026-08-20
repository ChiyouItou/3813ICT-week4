import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  user: any;

  constructor(private router: Router) {

  }

  ngOnInit() {

    const userData = localStorage.getItem('user');

    if (!userData) {

      this.router.navigate(['/login']);

      return;
    }

    this.user = JSON.parse(userData);

    console.log(this.user);
  }

  save() {

    localStorage.setItem(
      'user',
      JSON.stringify(this.user)
    );

    alert('Profile saved');

  }

}
/*week 5 v1
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  user: any;

  constructor(private router: Router) {

  }

  ngOnInit() {

    const userData = localStorage.getItem('user');

    if (!userData) {

      this.router.navigate(['/login']);

      return;
    }

    this.user = JSON.parse(userData);

    console.log(this.user);
  }

}

/*week4 import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {}
*/