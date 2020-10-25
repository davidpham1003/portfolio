import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-item-rate',
  templateUrl: './project-item-rate.component.html',
  styleUrls: ['./project-item-rate.component.scss']
})
export class ProjectItemRateComponent implements OnInit {
  @Input() star:number
  rate:any[] = []

  constructor() { }

  ngOnInit(): void {
    let DanhGia;
    let star = this.star % 2
    for (let index = 0; index < Math.floor((this.star)/2); index++) {
      DanhGia =
        "/assets/img/star-icon.png"
      this.rate.push(DanhGia);
    }
    if (star === 1){
      this.rate.push("/assets/img/star-half.png")
    }
  }

}
