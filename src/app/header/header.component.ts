import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  today: number = Date.now();
  user: string;
  birthday = new Date(2010, 11, 5);
  constructor(public auth: AuthService) {
    this.user = this.auth.getUser();
    console.log(this.user);
  }

  ngOnInit() {
  }
  loggout() {
    alert('To logout Enter ok');
    this.auth.logout();
  }
}
