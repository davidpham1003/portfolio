import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit,OnDestroy {
  isShow: boolean = false;
  private wowSubscription: Subscription;
  constructor(private wowService: NgwWowService) {

  }

  ngOnInit(): void {
    this.wowService.init();
  }
  ngAfterViewInit() {
    this.isShow = true;
    console.log(this.isShow);
  }
  ngOnDestroy(){
  }
}
