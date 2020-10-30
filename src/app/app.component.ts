import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit,OnInit {
  isShow: boolean;
  currentHeight: number;
  curentWidth:number;
  contentContainer:string;
  @HostListener('window:scroll')
  onWindowScroll() {
    this.currentHeight = window.pageYOffset;
  }
  @HostListener('window:resize')
  onsize() {
    this.curentWidth = window.innerWidth
  }
  constructor(private wowService: NgwWowService,private content : ProjectService) {
    this.curentWidth = window.innerWidth
    this.wowService.init()
  }

  
  title = 'portfolio';
  ngOnInit(){
    this.content.headerContent.subscribe((data)=>{
      this.contentContainer = data
    })
  }
  ngAfterViewInit() {
    this.isShow = true;
  }
}
