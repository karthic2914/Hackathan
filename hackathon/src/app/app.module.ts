import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER  } from '@angular/core';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { AppComponent } from './app.component';
import { HomeComponent } from './hackathon/home/home.component';
import { IdeasComponent } from './hackathon/ideas/ideas.component';
import { NewsComponent } from './hackathon/news/news.component';
import { HackersComponent } from './hackathon/hackers/hackers.component';
import { AdminComponent } from './hackathon/admin/admin.component';
import { AppRoutingModule } from './hackathon/app.routing.module';
import { LoginComponent } from './hackathon/login/login.component';
import { SignInComponent } from './hackathon/login/sign-in/sign-in.component';
import { SignUpComponent } from './hackathon/login/sign-up/sign-up.component';
import { HackathonStoreModule } from './store/hackathon.store.module';
import { startupServiceFactory } from './store/services/startup.service';
import { CmsStateService } from './store/services/cms-state.service';
import { AppNavigationComponent } from './shared/app-navigation/app-navigation.component';
import { AppVideoComponent } from './shared/app-video/app-video.component';
import { AppVideoDetailsComponent } from './shared/app-video-details/app-video-details.component';
import { AppHackathonBannerComponent } from './shared/app-hackathon-banner/app-hackathon-banner.component';
import { AppHackathonBannerDetailsComponent } from './shared/app-hackathon-banner-details/app-hackathon-banner-details.component';
import { AppLiveFeedComponent } from './shared/app-live-feed/app-live-feed.component';
import { AppLiveFeedDetailsComponent } from './shared/app-live-feed-details/app-live-feed-details.component';
import { AppPanelExpandComponent } from './shared/app-panel-expand/app-panel-expand.component';
import { AppPanelPaginationComponent } from './shared/app-panel-pagination/app-panel-pagination.component';
import { AppAwaitingIdeasListComponent } from './shared/app-awaiting-ideas-list/app-awaiting-ideas-list.component';
import { AppMasterListComponent } from './shared/app-master-list/app-master-list.component';
import { AppPublishListComponent } from './shared/app-publish-list/app-publish-list.component';
import { AppPublishFormComponent } from './shared/app-publish-form/app-publish-form.component';
import { AppIdeaFormComponent } from './shared/app-idea-form/app-idea-form.component';
import { AppHackerTeamInvitationComponent } from './shared/app-hacker-team-invitation/app-hacker-team-invitation.component';
import { AppHackerInvitationComponent } from './shared/app-hacker-invitation/app-hacker-invitation.component';
import { AppSearchListComponent } from './shared/app-search-list/app-search-list.component';
import { AppSearchDisplayComponent } from './shared/app-search-display/app-search-display.component';

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
    AppNavigationComponent,
    AppVideoComponent,
    AppVideoDetailsComponent,
    AppHackathonBannerComponent,
    AppHackathonBannerDetailsComponent,
    AppLiveFeedComponent,
    AppLiveFeedDetailsComponent,
    AppPanelExpandComponent,
    AppPanelPaginationComponent,
    AppAwaitingIdeasListComponent,
    AppMasterListComponent,
    AppPublishListComponent,
    AppPublishFormComponent,
    AppIdeaFormComponent,
    AppHackerTeamInvitationComponent,
    AppHackerInvitationComponent,
    AppSearchListComponent,
    AppSearchDisplayComponent
  ],
  imports: [
    StoreDevtoolsModule.instrument(instrumentOptions),
    StoreLogMonitorModule,
    HackathonStoreModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CmsStateService,
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
