import { ImageObjectComponent } from './components/image-object/image-object.component';
import { NewsObjectComponent } from './components/news-object/news-object.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { SelectClassificatorComponent } from './components/select-classificator/select-classificator.component';

import { CvEspComponent } from './cv/cv-esp.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeHomeComponent } from './welcome-home/welcome-home.component';
import {StudiesComponent} from './cv/studies/studies.component';
import {StudyComponent} from './cv/studies/study/study.component';
import {ProfessionalExperienceComponent} from './cv/professional-experience/professional-experience.component'
import {ProfessionalSkillsComponent} from './cv/professional-skills/professional-skills.component'
import {SkillsComponent} from './cv/professional-skills/skill/skills.component';
import {ExperienceComponent} from './cv/professional-experience/experience/experience.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const routes: Routes = [
  { path: '',
    redirectTo: '/helloworld',
    pathMatch: 'full'
  },
  { path: 'helloworld', component: WelcomeHomeComponent },
  {path:'test-news', component: HeaderComponent},
  { path: 'cv', component: CvEspComponent },
  { path: '**',
    redirectTo: '/helloworld',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    SkillsComponent,
    ExperienceComponent,
    StudyComponent,
    ProfessionalExperienceComponent,
    ProfessionalSkillsComponent,
    StudiesComponent,
    AppComponent,
    HeaderComponent,
    SelectClassificatorComponent,
    NewsObjectComponent,
    ImageObjectComponent,
    CvEspComponent,
    WelcomeHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    FontAwesomeModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
