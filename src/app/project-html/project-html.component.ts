import { Component, HostListener, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-html',
  templateUrl: './project-html.component.html',
  styleUrls: ['./project-html.component.scss']
})
export class ProjectHtmlComponent implements OnInit {
  isShowFull:boolean;
  projects:any[]

  constructor(private dataHeader : ProjectService) { }

  ngOnInit(): void {
    this.dataHeader.dataHeader('project')
    this.projects = this.dataHeader.project
  }

}
