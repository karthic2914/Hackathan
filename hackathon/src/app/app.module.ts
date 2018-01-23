import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER  } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './hackathon/home/home.component';
import { IdeasComponent } from './hackathon/ideas/ideas.component';
import { NewsComponent } from './hackathon/news/news.component';
import { HackersComponent } from './hackathon/hackers/hackers.component';
import { AdminComponent } from './hackathon/admin/admin.component';


import { NavigationComponent } from './shared/navigation/navigation.component';
import { VideoComponent } from './shared/video/video.component';

import { AppRoutingModule } from './hackathon/app.routing.module';
import { LoginComponent } from './hackathon/login/login.component';
import { SignInComponent } from './hackathon/login/sign-in/sign-in.component';
import { SignUpComponent } from './hackathon/login/sign-up/sign-up.component';
import { HackathonStoreModule } from './store/hackathon.store.module';
import { startupServiceFactory } from './store/services/startup.service';
import { CmsStateService } from './store/services/cms-state.service';
import { AdminStateService } from './store/services/admin-state.service';
import { HackerStateService } from './store/services/hacker-state.service';
import { IdeaStateService } from './store/services/idea-state.service';
import { LoginStateService } from './store/services/login-state.service';
import { NewsStateService } from './store/services/news-state.service';
import { VideoDetailsComponent } from './shared/video-details/video-details.component';
import { LiveFeedComponent } from './shared/live-feed/live-feed.component';
import { LiveFeedDetailsComponent } from './shared/live-feed-details/live-feed-details.component';
import { HackathonBannerComponent } from './shared/hackathon-banner/hackathon-banner.component';
import { HackathonBannerDetailsComponent } from './shared/hackathon-banner-details/hackathon-banner-details.component';
import { IdeaFormComponent } from './shared/idea-form/idea-form.component';
import { HackerInvitationComponent } from './shared/hacker-invitation/hacker-invitation.component';
import { HackerTeamInvitationComponent } from './shared/hacker-team-invitation/hacker-team-invitation.component';
import { InvitationFromTeamComponent } from './hackathon/hackers/invitation-from-team/invitation-from-team.component';
import { InvitationToTeamComponent } from './hackathon/hackers/invitation-to-team/invitation-to-team.component';
import { InvitationToHackerComponent } from './hackathon/hackers/invitation-to-hacker/invitation-to-hacker.component';
import { InvitationFromHackerComponent } from './hackathon/hackers/invitation-from-hacker/invitation-from-hacker.component';
import { ProfileComponent } from './hackathon/hackers/profile/profile.component';
import { IdeaApprovalComponent } from './hackathon/admin/idea-approval/idea-approval.component';
import { LogsComponent } from './hackathon/admin/logs/logs.component';
import { PublishNewsComponent } from './hackathon/admin/publish-news/publish-news.component';
import { HttpModule } from '@angular/http';

export function instrumentOptions() {
  return {
    monitor: useLogMonitor({ visible: true, position: 'right' })
  };
}

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    IdeasComponent,
    NewsComponent,
    HackersComponent,
    AdminComponent,
    LoginComponent,
    NavigationComponent,
    VideoComponent,
    VideoDetailsComponent,
    LiveFeedComponent,
    LiveFeedDetailsComponent,
    HackathonBannerComponent,
    HackathonBannerDetailsComponent,
    IdeaFormComponent,
    HackerInvitationComponent,
    HackerTeamInvitationComponent,
    InvitationFromTeamComponent,
    InvitationToTeamComponent,
    InvitationToHackerComponent,
    InvitationFromHackerComponent,
    ProfileComponent,
    IdeaApprovalComponent,
    LogsComponent,
    PublishNewsComponent
  ],
  imports: [
    StoreDevtoolsModule.instrument(instrumentOptions),
    StoreLogMonitorModule,
    HackathonStoreModule.forRoot(),
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    CmsStateService,
    AdminStateService,
    HackerStateService,
    IdeaStateService,
    LoginStateService,
    NewsStateService,
    {
      // Provider for APP_INITIALIZER
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [CmsStateService],
      multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
