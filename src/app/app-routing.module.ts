import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectInfoComponent } from './home/project-info/project-info.component';
import { ProjectHtmlComponent } from './project-html/project-html.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'project',component:ProjectHtmlComponent,children:[
  ]},
  {path:'project/:codeProject',component:ProjectInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
