import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { IdeasComponent } from './ideas/ideas.component';
import { NewsComponent } from './news/news.component';
import { HackersComponent } from './hackers/hackers.component';
import { AdminComponent } from './admin/admin.component';
import { AppIdeaFormComponent } from '../shared/app-idea-form/app-idea-form.component'
import { AppHackerTeamInvitationComponent } from '../shared/app-hacker-team-invitation/app-hacker-team-invitation.component'
import { AppHackerInvitationComponent } from '../shared/app-hacker-invitation/app-hacker-invitation.component'

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'ideas', component: IdeasComponent },
    { path: 'news', component: NewsComponent },
    { path: 'hackers', component: HackersComponent, children : [
      {path : 'app-idea-form', component: AppIdeaFormComponent},
      {path : 'app-hacker-team-invitation', component: AppHackerTeamInvitationComponent},
      {path : 'app-hacker-invitation', component: AppHackerInvitationComponent}
    ]},
    { path: 'admin', component: AdminComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
