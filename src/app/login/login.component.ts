import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loggedInUser: string;
  redirectedLink: string;
  findUser: {};
  credentials = [
    {
      username: 'feroz121',
      password: '1234',
    },
    {
      username: 'swapna121',
      password: '12345',
    },
  ];
  constructor(private _router: Router) {}
  @Output() onVoted = new EventEmitter<string>();
  ngOnInit(): void {}

  onSubmit(form: FormBuilder) {
    this.findUser = this.credentials.find(
      (cred) =>
        cred.username == form['username'] && cred.password == form['password']
    );
    if (this.findUser) {
      this.loggedInUser = this.findUser['username'];
      localStorage.setItem('loggedInUser', this.loggedInUser);
      this.onVoted.emit(this.loggedInUser);
      console.log('hii');
      this._router.navigate(['home']);
    } else {
      this.redirectedLink = 'login';
      this._router.navigate(['login']);
    }
  }
}
