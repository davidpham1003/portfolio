import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  // header:string = 'home';
  private headerSubject = new BehaviorSubject('home');
  headerContent = this.headerSubject.asObservable()
  dataHeader(value){
    this.headerSubject.next(value)
  }
  project:any = [
    {
      code:'booking-movies',
      title: 'Booking Movies',
      fw: 'Angular',
      des: 'Graduation Thesis at Cybersoft academy',
      use:
        'Using Angular, Boostrap4,TypeScript, Angular Material,Photoshop, Sweet alert 2 ...v.v.... with full functionality',
      funcs: [
        {
          name: 'Users',
          desFunc:
            'register, login, change information, password, change avatar, buy tickets, watch movie information, rating on movies ...',
        },
        {
          name: 'Admin',
          desFunc:
            'add movies, edit movies, add users, add administrator and add showtimes for movies',
        },
      ],
      url:"https://www.youtube.com/embed/X-pm8cQeBQA",
      imgLogo:'/assets/img/angular.png',
      img:'/assets/img/booking.jpg',
      link:'https://du-an-phim-80edb.web.app/'
    },
    {
      code:'to-do-list',
      title: 'To Do List Online',
      fw: 'ReactJS',
      des: 'Application for Task Management, Creating "To Do App" online   ',
      use:
        'Using ReactJS, Redux,Bootstrap 4,Firebase Storage ... ',
      funcs: [
        {name:'Add Action',desFunc:''},
        {name:'Done and Remove Action',desFunc:''},
        {name:'Review history',desFunc:'Review the history of completed activities'}
      ],
      url:"https://www.youtube.com/embed/X-pm8cQeBQA",
      img:'/assets/img/todolist.jpg',
      imgLogo:'/assets/img/react.png',
      link:'Updating...'
    },
    {
      code:'test-glass',
      title: 'Test Glass',
      fw: 'ReactJS',
      des: 'Application for Task Management  ',
      use:
        'Using ReactJS, Redux,Bootstrap 4 ... ',
      // funcs: [
      //   // {name:'Add Action',desFunc:''},
      //   // {name:'Done and Remove Action',desFunc:''},
      //   // {name:'Review history',desFunc:'Review the history of completed activities'}
      // ],
      url:"https://www.youtube.com/embed/X-pm8cQeBQA",
      img:'/assets/img/testglass.jpg',
      imgLogo:'/assets/img/react.png',
      link:'Updating...'
    },
    {
      code:'vo-lam',
      title: 'volamhoiuc.com',
      fw: 'Freelance',
      des: 'Design website volamhoiuc.com',
      use:
        'Using PHP, HTML, CSS with my team',
      // funcs: [
      //   {name:'Users',desFunc:'register, login, change information, password, change avatar, buy tickets, watch movie information, rating on movies ...'},
      //   {name:'Admin',desFunc:'add movies, edit movies, add users, add administrator and add showtimes for movies'}
      // ],
      url:"https://www.youtube.com/embed/X-pm8cQeBQA",
      imgLogo:'/assets/img/php.png',
      img:'/assets/img/volam.jpg',
      link:'https://volamhoiuc.com/'
    },
    {
      code:'uber',
      title: 'Uber cash register ',
      fw: 'Project course',
      des: 'Project course at Cybersoft Academy (100/100 Mark)',
      use:
        'Boostrap4, HTML5, CSS3 and Javascript ... ',
      // funcs: [
      //   {name:'Add Action',desFunc:''},
        // {name:'Done and Remove Action',desFunc:''},
        // {name:'Review history',desFunc:'Review the history of completed activities'}
      // ],
      url:"https://www.youtube.com/embed/X-pm8cQeBQA",
      imgLogo:'/assets/img/js.png',
      img:'/assets/img/uber.jpg',
      link:'Updating...'
    },
    {
      code:'clone',
      title: 'Clone home page Tix.vn ',
      fw: 'Project course',
      des: 'Project course at Cybersoft Academy (100/100 Mark)',
      use:
        'Using Boostrap4, HTML5 and CSS3',
      // funcs: [
      //   // {name:'Add Action',desFunc:''},
      //   // {name:'Done and Remove Action',desFunc:''},
      //   // {name:'Review history',desFunc:'Review the history of completed activities'}
      // ],
      url:"https://www.youtube.com/embed/X-pm8cQeBQA",
      imgLogo:'/assets/img/bs4.png',
      img:'/assets/img/tix.jpg',
      link:'Updating...'
    },
    {
      code:'portfolio',
      title: 'Portfolio ',
      fw: 'Project course',
      des: 'Project course at Cybersoft Academy (100/100 Mark)',
      use:
        'Using HTML, CSS',
      // funcs: [
      //   {name:'Add Action',desFunc:''},
      //   {name:'Done and Remove Action',desFunc:''},
      //   {name:'Review history',desFunc:'Review the history of completed activities'}
      // ],
      url:"https://www.youtube.com/embed/X-pm8cQeBQA",
      imgLogo:'/assets/img/htmlcss.png',
      img:'/assets/img/portfolio.jpg',
      link:'Updating...'
    },
  ];
  constructor() {}
}
