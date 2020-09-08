import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private _router: Router) {}
  title = 'Routing';
  username: string = '';

  ngOnInit() {
    this.username = localStorage.getItem('loggedInUser');
  }

  user(e) {
    console.log(e);
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this._router.navigate(['login']);
  }
}
