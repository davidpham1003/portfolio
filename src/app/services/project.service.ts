import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  // header:string = 'home';
  private headerSubject = new BehaviorSubject('home');
  headerContent = this.headerSubject.asObservable();
  dataHeader(value) {
    this.headerSubject.next(value);
  }
  project: any = [
    {
      code: 'booking-movies',
      time: '9/2020 - 10/2020',
      title: 'Booking Movies',
      fw: 'Angular',
      member: '1',
      position: 'Front End Developer',
      role: [
        'Analyze , design layouts website.',
        'Process the logic proficient.',
        'Improve performance website: preload component, lazyload component, lazyload image, Using Pipes,...',
      ],
      des:
        'Graduation Thesis at Cybersoft academy, Booking Movie Tickets Website.',
      use:
        'Using Angular, Observable, Guard, Firebase cloud store, SCSS, Boostrap4, TypeScript, Angular Material, Photoshop, Sweet alert 2 ...v.v.... with full functionality',
      funcs: [
        {
          name: 'Users',
          desFunc: [
            { name: 'Layout', use: ' Using Html,Bootstrap 4 to design layout' },
            {
              name: 'Maintain',
              use:
                ' Using SCSS folder structure for convenient maintenance and upgrade',
            },
            {
              name: 'Register, login',
              use:
                '  Using formGroup to validate,Using Candeactive to guard component when user dirtied field input',
            },
            {
              name: 'Change information User',
              use: ' Name, password,Avatar...',
            },
            {
              name: 'Buy tickets',
              use:
                ' Using Candeactive to guard component when user booked tickets and Interceptor to authentication',
            },
            {
              name: 'Rating on movies',
              use: ' Using firebase storage',
            },
            {
              name: 'Review booking history',
              use: ' Using ngx pagination to pagination',
            },
            {
              name: 'Change themes',
              use: ' Using Custom directive and CSS variable to change themes',
            },
          ],
        },
        {
          name: 'Admin',
          desFunc: [
            {
              name: 'Layout',
              use: ' Using Html,Bootstrap 4, Angular material to design layout',
            },
            {
              name: 'Responsive',
              use:
                ' Responsive is suitable for all screen types',
            },
            {
              name: 'Maintain',
              use:
                ' Using SCSS folder structure for convenient maintenance and upgrade',
            },
            {
              name: 'Sign In',
              use:
                ' Using CanActivate to guard admin dashboard (requires login)',
            },
            {
              name: 'Add and edit user, admin',
              use: ' Using formGroup to validate',
            },
            {
              name: 'Add and edit movies',
              use: ' Using formData to upload file image...',
            },
            {
              name: 'Add showtimes for movies',
              use:
                '  Using pipe to format date time to match the backend format',
            },
          ],
        },
      ],
      imgLogo: '/assets/img/angular.png',
      git: 'https://github.com/davidpham1003/do-an-cuoi-khoa.git',
      img: '/assets/img/booking.jpg',
      link: 'https://du-an-phim-80edb.web.app/',
      youtube: 'https://www.youtube.com/embed/8w_m0rvAVyQ',
    },
    {
      code: 'resume-online',
      time: '10/2020 - 11/2020',
      title: 'Resume Online',
      fw: 'Angular',
      member: '1',
      position: 'Front End Developer',
      role: [
        'Analyze , design layouts website.',
        'Process the logic proficient.',
        'Learning new technology : Firebase, firebase cloud storage, custom directive angular...',
      ],
      des: 'My résumé online.',
      use:
        'Using Angular, Firebase cloud store, SCSS, Boostrap4, TypeScript, Photoshop, Slick, ngx notify ...',
      funcs: [
        {
          desFunc: [
            { name: 'Layout', use: ' Using Html,Bootstrap 4 to design layout' },
            {
              name: 'Maintain',
              use:
                ' Using SCSS folder structure for convenient maintenance and upgrade',
            },
            {
              name: 'Contact, comment',
              use:
                '  Using firebase cloud storage to store and get data',
            },
            {
              name: 'CV offline:',
              use: ' Download my CV offline.',
            },
            {
              name: 'Responsive',
              use:
                ' Responsive is suitable for all screen types',
            },
            {
              name: 'Change themes',
              use: ' Using Custom directive and CSS variable to change themes',
            },
          ],
        },
      ],
      imgLogo: '/assets/img/angular.png',
      git: 'https://github.com/davidpham1003/portfolio',
      img: '/assets/img/resume.jpg',

      link: 'https://contact-resume.web.app/',
      youtube: 'https://www.youtube.com/embed/rUUSUezowpI',
    },
    {
      code: 'to-do-list',
      time: '7/2020',
      title: 'To Do List Online',
      fw: 'ReactJS',
      des: 'Application for Task Management, Creating "To Do App" online   ',
      use: 'Using ReactJS, Redux,Bootstrap 4,Firebase Storage ... ',
      member: '1',
      position: 'Front End Developer',
      role: [
        'Analyze , design layouts website.',
        'Process the logic proficient.',
      ],
      funcs: [
        { desFunc: [{ name: 'Action', use: 'Add,done and remove action' }] },
        {
          desFunc: [
            {
              name: 'Review history',
              use: 'Review the history of completed activities',
            },
          ],
        },
        {
          desFunc: [
            { name: 'Data', use: 'Using firebase cloud to store data' },
          ],
        },
      ],
      git: 'https://github.com/davidpham1003?tab=repositories',
      img: '/assets/img/todolist.jpg',
      imgLogo: '/assets/img/react.png',
    },
    {
      code: 'test-glass',
      title: 'Test Glass',
      time: '7/2020',
      fw: 'ReactJS',
      des: 'Application for Task Management  ',
      use: 'Using ReactJS, Redux,Bootstrap 4 ... ',
      member: '1',
      position: 'Front End Developer',
      role: [
        'Analyze , design layouts website.',
        'Process the logic proficient.',
      ],
      // funcs: [
      //   // {name:'Add Action',desFunc:''},
      //   // {name:'Done and Remove Action',desFunc:''},
      //   // {name:'Review history',desFunc:'Review the history of completed activities'}
      // ],
      git: 'https://github.com/davidpham1003?tab=repositories',
      img: '/assets/img/testglass.jpg',
      imgLogo: '/assets/img/react.png',
    },
    {
      code: 'vo-lam',
      title: 'volamhoiuc.com',
      fw: 'Freelance',
      time: '9/2020',
      des: 'Design website volamhoiuc.com',
      use: 'Using PHP, HTML, CSS with my team',
      member: 'many',
      position: 'Front End Developer',
      role: ['Analyze , design layouts website.'],
      // funcs: [
      //   {name:'Users',desFunc:'register, login, change information, password, change avatar, buy tickets, watch movie information, rating on movies ...'},
      //   {name:'Admin',desFunc:'add movies, edit movies, add users, add administrator and add showtimes for movies'}
      // ],
      git: 'https://github.com/davidpham1003?tab=repositories',
      imgLogo: '/assets/img/php.png',
      img: '/assets/img/volam.jpg',
      link: 'https://volamhoiuc.com/',
    },
    {
      code: 'uber',
      title: 'Uber cash register ',
      fw: 'Project course',
      time: '6/2020',
      des: 'Project course at Cybersoft Academy (100/100 Mark)',
      use: 'Boostrap4, HTML5, CSS3 and Javascript ... ',
      member: '1',
      position: 'Front End Developer',
      role: [
        'Analyze , design layouts website.',
        'Process the logic proficient.',
      ],
      // funcs: [
      //   {name:'Add Action',desFunc:''},
      // {name:'Done and Remove Action',desFunc:''},
      // {name:'Review history',desFunc:'Review the history of completed activities'}
      // ],
      git: 'https://github.com/davidpham1003?tab=repositories',
      imgLogo: '/assets/img/js.png',
      img: '/assets/img/uber.jpg',
    },
    {
      code: 'clone',
      title: 'Home page Tix.vn ',
      fw: 'Project course',
      time: '5/2020',
      des: 'Project course at Cybersoft Academy (100/100 Mark)',
      use: 'Using Boostrap4, HTML5 and CSS3',
      member: '1',
      position: 'Front End Developer',
      role: ['Analyze , design layouts website.'],
      // funcs: [
      //   // {name:'Add Action',desFunc:''},
      //   // {name:'Done and Remove Action',desFunc:''},
      //   // {name:'Review history',desFunc:'Review the history of completed activities'}
      // ],
      git: 'https://github.com/davidpham1003?tab=repositories',
      imgLogo: '/assets/img/bs4.png',
      img: '/assets/img/tix.jpg',
    },
    {
      code: 'portfolio',
      title: 'Portfolio ',
      time: '4/2020',
      fw: 'Project course',
      des: 'Project course at Cybersoft Academy (100/100 Mark)',
      use: 'Using HTML, CSS',
      member: '1',
      position: 'Front End Developer',
      role: ['Analyze , design layouts website.'],
      // funcs: [
      //   {name:'Add Action',desFunc:''},
      //   {name:'Done and Remove Action',desFunc:''},
      //   {name:'Review history',desFunc:'Review the history of completed activities'}
      // ],
      git: 'https://github.com/davidpham1003?tab=repositories',
      imgLogo: '/assets/img/htmlcss.png',
      img: '/assets/img/portfolio.jpg',
    },
  ];
  constructor() {}
}
