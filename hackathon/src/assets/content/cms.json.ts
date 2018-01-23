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
        routerLink: 'hackers',
        submenu: [{
          title: 'Post an idea',
          imgUrl: '/../../assets/images/hacker1.png',
          routerLink: 'hackers'
        }]
      },
      {
        title: 'Admin',
        imgUrl: '/../../assets/images/admin1.png',
        routerLink: '/admin'
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
    }
  }
};
