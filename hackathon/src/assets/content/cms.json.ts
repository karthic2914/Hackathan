export const cmsJSON = {
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
          title: 'Invitation to team',
          imgUrl: '/../../assets/images/hacker1.png',
          routerLink: '/hackers/invitationToTeam'
        }, {
          title: 'Invitation from team',
          imgUrl: '/../../assets/images/hacker1.png',
          routerLink: '/hackers/invitationFromTeam'
        }, {
          title: 'Invitation to hacker',
          imgUrl: '/../../assets/images/hacker1.png',
          routerLink: '/hackers/invitationToHacker'
        }, {
          title: 'Initation from hacker',
          imgUrl: '/../../assets/images/hacker1.png',
          routerLink: '/hackers/invitationFromHacker'
        }, {
          title: 'Profile',
          imgUrl: '/../../assets/images/hacker1.png',
          routerLink: '/hackers/profile'
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
        heading: 'Header',
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
        description: `Newline is free CSS template by templatemo. Credits go to Pexels.com for a video background and Unsplash for images.
        Please tell your friends about templatemo and this is a way to help back. Thank you. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Quisque dictum convallis mi. In dapibus auctor dictum donec mattis quis eros ultricies
        feugiat`
      }, {
        title: '2016',
        className: 'second',
        imageUrl: '/../../assets/images/2016.jpg',
        description: `Newline is free CSS template by templatemo. Credits go to Pexels.com for a video background and Unsplash for images.
        Please tell your friends about templatemo and this is a way to help back. Thank you. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Quisque dictum convallis mi. In dapibus auctor dictum donec mattis quis eros ultricies
        feugiat`
      }, {
        title: '2015',
        className: 'third',
        imageUrl: '/../../assets/images/2015.jpg',
        description: `Newline is free CSS template by templatemo. Credits go to Pexels.com for a video background and Unsplash for images.
        Please tell your friends about templatemo and this is a way to help back. Thank you. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Quisque dictum convallis mi. In dapibus auctor dictum donec mattis quis eros ultricies
        feugiat`
      }]
    }
  }
};
