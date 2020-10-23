import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  isShowDes: boolean=false;
  projects: any[];
  indexProject: number;
  constructor(private project: ProjectService) {}
  showDes(value) {
    this.isShowDes = !this.isShowDes;
    this.indexProject = value
  }
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
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
    this.projects.length = this.projects.length - 1;
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
    this.projects = this.project.project;
  }
}
