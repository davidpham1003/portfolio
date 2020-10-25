import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './home/slider/slider.component';
import { SkillsComponent } from './home/skills/skills.component';
import { ExpEduComponent } from './home/exp-edu/exp-edu.component';
import { ProjectComponent } from './home/project/project.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProjectItemComponent } from './home/project/project-item/project-item.component';
import { ContactComponent } from './home/contact/contact.component';
import { HobbyComponent } from './home/hobby/hobby.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { NotifierModule, NotifierOptions } from "angular-notifier";
import { ProjectHtmlComponent } from './project-html/project-html.component';
import { ContactFormComponent } from './home/contact/contact-form/contact-form.component';
import { ProjectInfoComponent } from './home/project-info/project-info.component';
import { PipeModule } from './pipe/pipe.module';
import { ProjectItemRateComponent } from './home/project-info/project-item-rate/project-item-rate.component';
import { FooterComponent } from './footer/footer.component';

const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'right',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};
@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SliderComponent,
    SkillsComponent,
    ExpEduComponent,
    ProjectComponent,
    ProjectItemComponent,
    ContactComponent,
    HobbyComponent,
    ProjectHtmlComponent,
    ContactFormComponent,
    ProjectInfoComponent,
    ProjectItemRateComponent,
    FooterComponent,
  ],
  imports: [
    PipeModule,
    NotifierModule.withConfig(customNotifierOptions),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
