import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  currentHeight:number;
  @HostListener('window:scroll')

  onWindowScroll(){
    this.currentHeight = window.pageYOffset;
    console.log( this.currentHeight)
  }
  constructor() { }

  ngOnInit(): void {
    this.currentHeight = window.pageYOffset;
  }

}
