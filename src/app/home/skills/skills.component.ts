import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Subscription } from 'rxjs';
import { ExpEduService } from 'src/app/services/exp-edu.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  private wowSubscription: Subscription;
  skill:any[] = []
  constructor(private wowService: NgwWowService,private skills:ExpEduService) { 
    this.wowService.init()
  }
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  addSlide() {}

  removeSlide() {
    // this.skill.length = this.skill.length - 1;
  }

  slickInit(e) {
    // console.log('slick initialized');
  }

  breakpoint(e) {
    // console.log('breakpoint');
  }

  afterChange(e) {
    // console.log('afterChange');
  }

  beforeChange(e) {
    // console.log('beforeChange');
  }

  ngOnInit(): void {
    this.skill = this.skills.skills
  }

}
