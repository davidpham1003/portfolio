import { Component, HostListener, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  content: string;
  currentHeight:number;
  constructor(private dataHeader : ProjectService) {}
  @HostListener('window:scroll')
  onWindowScroll(){
    this.currentHeight = window.pageYOffset;
  }


  ngOnInit(): void {
    this.currentHeight = window.pageYOffset;
    console.log(  this.currentHeight)
    this.dataHeader.headerContent.subscribe(data=>{
      this.content = data
    })
    console.log(this.content)
  }
}
