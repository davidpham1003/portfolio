import { Component, OnInit } from '@angular/core';
import { ExpEduService } from 'src/app/services/exp-edu.service';

@Component({
  selector: 'app-exp-edu',
  templateUrl: './exp-edu.component.html',
  styleUrls: ['./exp-edu.component.scss']
})
export class ExpEduComponent implements OnInit {
  exp:any[]
  edu:any[]
  content:string ='exp';
  constructor(private expEdu :ExpEduService) { }
 
  ngOnInit(): void {
    this.exp = this.expEdu.exp; 
    this.edu = this.expEdu.edu;
  }

}
