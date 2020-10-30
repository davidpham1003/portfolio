import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { ContactService } from 'src/app/services/contact.service';
import { ProjectService } from 'src/app/services/project.service';
declare var $:any;
@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
})
export class ProjectInfoComponent implements OnInit {
  arrayTitle:string[] = [];
  projectInfo: any;
  projectList: any[]
  commentArray: any[] = [];
  projectCode: string;
  star:number = 10;
  currentId:number = 0;
  public formComment: FormGroup;
  constructor(
    private project: ProjectService,
    private activeRoute: ActivatedRoute,
    private commentData: ContactService,
    private notifier: NotifierService,
    private router : Router,
  ) {
    this.formComment = new FormGroup({
      name: new FormControl(null, Validators.required),
      mess: new FormControl(null, Validators.required),
    });
  }
  changeRouter(code){
    this.router.navigateByUrl('/project', { skipLocationChange: true }).then(() => {
      this.router.navigate([`/project/${code}`]);
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
      this.currentId += 1;
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
              this.currentId = data.length;
              data.forEach((data) => {
                this.commentArray = [data.payload.doc.data(),...this.commentArray]
                
              });
            }
          },
        });
        this.projectCode = params.codeProject;
        this.projectList = this.project.project;
        this.projectInfo = this.project.project.find(
          (item) => item.code == params.codeProject
        );
        for( let i = 0 ; i < this.projectInfo.title.split('').length;i++){
          this.arrayTitle.push(this.projectInfo.title.split('')[i])
        }
        console.log(this.arrayTitle)
      },
    });

    this.project.dataHeader('project');


  }
}
