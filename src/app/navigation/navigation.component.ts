import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  windowheight: any;
  heightside: any;
  public opened1 = true;
  public opened2 = true;
  public opened3 = true;
  public opened4 = true;
  public dataSaved = false;
  public windowTop1: number = 35;
  public windowLeft1: number = 0;
  public windowTop2: number = 35;
  public windowLeft2: number = 350;

  public windowTop3: number = 250;
  public windowLeft3: number = 0;
  public windowTop4: number = 250;
  public windowLeft4: number = 350;
  public close1() {
    this.opened1 = false;
  }
  public close2() {
    this.opened2 = false;
  }
  public close3() {
    this.opened3 = false;
  }
  public close4() {
    this.opened4 = false;
  }

  public open1() {
    this.opened1 = true;
  }
  public open2() {
    this.opened2 = true;
  }
  public open3() {
    this.opened3 = true;
  }
  public open4() {
    this.opened4 = true;
  }

  public submit() {
    this.dataSaved = true;
    this.close();
  }
  constructor() {
 
  }

  ngOnInit() {
  }

}
