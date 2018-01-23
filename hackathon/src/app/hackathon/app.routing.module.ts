import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { IdeasComponent } from './ideas/ideas.component';
import { NewsComponent } from './news/news.component';
import { HackersComponent } from './hackers/hackers.component';
import { AdminComponent } from './admin/admin.component';
import { IdeaFormComponent } from '../shared/idea-form/idea-form.component';
import { HackerInvitationComponent } from '../shared/hacker-invitation/hacker-invitation.component';
import { HackerTeamInvitationComponent } from '../shared/hacker-team-invitation/hacker-team-invitation.component';
import { InvitationFromTeamComponent } from './hackers/invitation-from-team/invitation-from-team.component';
import { InvitationToTeamComponent } from './hackers/invitation-to-team/invitation-to-team.component';
import { InvitationToHackerComponent } from './hackers/invitation-to-hacker/invitation-to-hacker.component';
import { InvitationFromHackerComponent } from './hackers/invitation-from-hacker/invitation-from-hacker.component';
import { ProfileComponent } from './hackers/profile/profile.component';
import { IdeaApprovalComponent } from './admin/idea-approval/idea-approval.component';
import { LogsComponent } from './admin/logs/logs.component';
import { PublishNewsComponent } from './admin/publish-news/publish-news.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'ideas', component: IdeasComponent },
    { path: 'news', component: NewsComponent },
    { path: 'hackers', component: HackersComponent,
    children: [
      { path: '', component: IdeaFormComponent },
      { path: 'invitationFromTeam', component: InvitationFromTeamComponent },
      { path: 'invitationToTeam', component: InvitationToTeamComponent },
      { path: 'invitationToHacker', component: InvitationToHackerComponent },
      { path: 'invitationFromHacker', component: InvitationFromHackerComponent },
      { path: 'profile', component: ProfileComponent }
     ]
    },
    { path: 'admin', component: AdminComponent,
    children: [
      { path: '', component: IdeaApprovalComponent },
      { path: 'logs', component: LogsComponent },
      { path: 'publishNews', component: PublishNewsComponent }
     ] }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }