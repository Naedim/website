import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './Page/home/home.component';
import { CvComponent } from './Page/cv/cv.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { VagrantComponent } from './articles/vagrant/vagrant.component';
import { JenkinsComponent } from './articles/jenkins/jenkins.component';
import { E6Component } from './Page/e6/e6.component';
import { TechnologicComponent } from './Page/watch/technologic/technologic.component';
import { JuridicalComponent } from './Page/watch/juridical/juridical.component';
import { ArticlelistComponent } from './elements/articlelist/articlelist.component';
import { WorkComponent } from './Page/work/work.component';
import { AngularComponent } from './articles/angular/angular.component';
import { FirebaseComponent } from './articles/firebase/firebase.component';
import { GitkrakenComponent } from './articles/gitkraken/gitkraken.component';




const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cv', component: CvComponent},
  { path: 'work', component: WorkComponent,
  children: [
    {path: 'angular', component: AngularComponent},
    {path: 'firebase', component: FirebaseComponent},
    {path: 'gitkraken', component: GitkrakenComponent},
    {path: 'vagrant', component: VagrantComponent},
    {path: 'jenkins', component: JenkinsComponent},
]},
    { path: 'e6', component: E6Component},
    { path: 'Technological watch', component: TechnologicComponent},
    { path: 'Juridical watch', component: JuridicalComponent},
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CvComponent,
    NavbarComponent,
    VagrantComponent,
    JenkinsComponent,
    E6Component,
    TechnologicComponent,
    JuridicalComponent,
    ArticlelistComponent,
    WorkComponent,
    AngularComponent,
    FirebaseComponent,
    GitkrakenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
