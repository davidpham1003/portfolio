import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  isShow: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.isShow = true;
    console.log(this.isShow);
  }
}
