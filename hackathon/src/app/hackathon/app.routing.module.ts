import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { IdeasComponent } from './ideas/ideas.component';
import { NewsComponent } from './news/news.component';
import { HackersComponent } from './hackers/hackers.component';
import { AdminComponent } from './admin/admin.component';
import { AppPublishFormComponent } from '../shared/app-publish-form/app-publish-form.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'ideas', component: IdeasComponent },
    { path: 'news', component: NewsComponent },
    { path: 'hackers', component: HackersComponent },
    { path: 'admin', component: AdminComponent },
    {path:'ideas-publish',component:AppPublishFormComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }