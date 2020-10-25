import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  isShow:boolean
  currentHeight:number;
  @HostListener('window:scroll')

  onWindowScroll(){
    this.currentHeight = window.pageYOffset;
    console.log( this.currentHeight)
  }
  title = 'portfolio';
  ngAfterViewInit(){
    this.isShow = true
  }
  
}
