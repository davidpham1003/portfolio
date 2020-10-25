import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { ContactService } from 'src/app/services/contact.service';
import { ProjectService } from 'src/app/services/project.service';
declare var $:any;
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
})
export class ProjectInfoComponent implements OnInit {
  projectInfo: any;
  projectList: any[]
  commentArray: any[] = [];
  projectCode: string;
  star:number = 10;
  public formComment: FormGroup;
  constructor(
    private project: ProjectService,
    private activeRoute: ActivatedRoute,
    private commentData: ContactService,
    private notifier: NotifierService,
  ) {
    this.formComment = new FormGroup({
      name: new FormControl(null, Validators.required),
      mess: new FormControl(null, Validators.required),
    });
  }
  comment(value) {
    this.formComment.markAllAsTouched();
    if (this.formComment.invalid || this.star == 0) {
      return;
    }
    const comment = {
      ...value,
      star: this.star
    }
    this.commentData.createComment(comment, this.projectCode).then(() => {
      this.notifier.notify('success', 'You have successfully commented! ');
      $('input[name="rating"]').prop('checked', false);
      this.formComment.reset();
    });
  }

  setStar(value) {
    this.star = value;
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe({
      next: (params) => {
        this.commentData.getComment(params.codeProject).subscribe({
          next: (data) => {
            this.commentArray = []
            if (data.length > 0) {
              data.forEach((data) => {
                this.commentArray = [data.payload.doc.data(),...this.commentArray]
                console.log(data.payload.doc.id)
              });
            }
          },
        });
        this.projectCode = params.codeProject;
        this.projectList = this.project.project;
        this.projectInfo = this.project.project.find(
          (item) => item.code == params.codeProject
        );
      },
    });

    this.project.dataHeader('project');


  }
}
