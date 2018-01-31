import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NavigationComponent } from '../../shared/navigation/navigation.component';
import { VideoComponent } from '../../shared/video/video.component';
import { VideoDetailsComponent } from '../../shared/video-details/video-details.component';
import { HackathonBannerComponent } from '../../shared/hackathon-banner/hackathon-banner.component';
import { FooterComponent } from '../../shared/footer/footer.component';

import { HomeComponent } from './home.component';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

// tslint:disable-next-line:max-classes-per-file
class MockStore {
  public data = {
    home: {
      navigation: [
        {
          title: 'Home',
          imgUrl: '/../../assets/images/home-icon.png',
          routerLink: '/'
        },
        {
          title: 'Idea',
          imgUrl: '/../../assets/images/idea-icon4.png',
          routerLink: '/ideas'
        },
        {
          title: 'News',
          imgUrl: '/../../assets/images/news.png',
          routerLink: '/news'
        },
        {
          title: 'Hackers',
          imgUrl: '/../../assets/images/hacker1.png',
          routerLink: '/hackers',
          submenu: [{
            title: 'Post an idea',
            imgUrl: '/../../assets/images/hacker1.png',
            routerLink: '/hackers'
          }, {
            title: 'Request to team',
            imgUrl: '/../../assets/images/hacker1.png',
            routerLink: '/hackers/invitationToTeam'
          }, {
            title: 'Invitation from team',
            imgUrl: '/../../assets/images/hacker1.png',
            routerLink: '/hackers/invitationFromTeam'
          }, {
            title: 'Request to hacker',
            imgUrl: '/../../assets/images/hacker1.png',
            routerLink: '/hackers/invitationToHacker'
          }, {
            title: 'Invitation from hacker',
            imgUrl: '/../../assets/images/hacker1.png',
            routerLink: '/hackers/invitationFromHacker'
          }]
        },
        {
          title: 'Admin',
          imgUrl: '/../../assets/images/admin1.png',
          routerLink: '/admin',
          submenu: [{
            title: 'Idea Approval',
            imgUrl: '/../../assets/images/admin1.png',
            routerLink: '/admin'
          }, {
            title: 'Logs',
            imgUrl: '/../../assets/images/admin1.png',
            routerLink: '/admin/logs'
          }, {
            title: 'Publish News',
            imgUrl: '/../../assets/images/admin1.png',
            routerLink: '/admin/publishNews'
          }]
        }
      ],
      videos: {
        url: {
          mp4Format: '/../../assets/videos/video.mp4',
          orgFormat: '/../../assets/videos/video.ogg'
        },
        description: {
          heading: 'Hackathon',
          title: 'Welcome to Hackathon',
          description: 'blah... blah... blah...',
          discoverMorebutton: {
            title: 'Discover More'
          },
          readMorebutton: {
            title: 'Read more'
          }
        }
      },
      banner: {
        bannerContent: [{
          title: '2017',
          className: 'first',
          imageUrl: '/../../assets/images/2017.jpg',
          desimageUrl : 'http://www.unitewnc.io/wp-content/uploads/2017/07/StG-Hackathon-Event-Cover.jpg',
          description: `Newline is free CSS template by templatemo. Credits go to Pexels.com for a video background and Unsplash for images.
          Please tell your friends about templatemo and this is a way to help back. Thank you. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Quisque dictum convallis mi. In dapibus auctor dictum donec mattis quis eros ultricies
          feugiat`
        }, {
          title: '2016',
          className: 'second',
          imageUrl: '/../../assets/images/2016.jpg',
          desimageUrl : 'https://amft.io/wp-content/uploads/2017/09/HACKATHON_FLYER.png',
          description: `Newline is free CSS template by templatemo. Credits go to Pexels.com for a video background and Unsplash for images.
          Please tell your friends about templatemo and this is a way to help back. Thank you. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Quisque dictum convallis mi. In dapibus auctor dictum donec mattis quis eros ultricies
          feugiat`
        }, {
          title: '2015',
          className: 'third',
          imageUrl: '/../../assets/images/2015.jpg',
          desimageUrl : 'https://blog.docker.com/wp-content/uploads/fbbcec1a-0151-476f-a3ff-51aee623e8ef-1.jpg',
          description: `Newline is free CSS template by templatemo. Credits go to Pexels.com for a video background and Unsplash for images.
          Please tell your friends about templatemo and this is a way to help back. Thank you. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Quisque dictum convallis mi. In dapibus auctor dictum donec mattis quis eros ultricies
          feugiat`
        }]
      }
    }
  };

  public dispatch(action: string, payload: any) {
      console.log('dispatching from the mock store!');
  }
  public select(name: string) {
      console.log('selecting from the mock store!');
      return Observable.of(this.data[name]);
  }
  public subscribe(cb) {
      cb(this.data);
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ HomeComponent ],
       providers: [
        { provide: Store, useClass: MockStore }
      ]
    })
    .compileComponents();
  }));

  // tslint:disable-next-line:no-shadowed-variable
  beforeEach(inject([Store], (MockStore: Store<any>) => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  }));

  it(`should be really initialized`, () => {
    expect(fixture).toBeDefined();
    expect(component).toBeDefined();
});
});
