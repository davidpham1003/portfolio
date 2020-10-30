import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExpEduService {
  exp = [
    {
      year: '02/2020 - On Going',
      position: 'Freelance',
      company: 'Facebook, ITViec',
      projects:'volamhoiuc.com, Resume online, ...',
      des: 'Freelance work in the field of website design, discussing and consulting with clients to develop website',
    },
    {
      year: '03/2020 - 11/2020',
      position: 'Intership',
      company: 'Cybersoft Academy',
      projects:'Booking Movies, To do list Online, E-learning, ... ,',
      des: 'Studying and working as an intern at CyberSoft Academy',
    },
    
  ];
  edu = [    
    {
      year: '2013 - On Going',
      position: 'College',
      school: 'Bach Khoa University',
      major: 'Major - Car Technology',
    },
    {
      year: '2013 - 2015',
      position: 'College',
      school: 'KHTN University',
      major: 'Major - Physics',
    },
    {
      year: '2010 - 2013',
      position: 'High School',
      school: 'Tan Phu High School',
      major: 'Studying at Tan Phu High School',
    },
  ];
  skills = [
    {img:'/assets/img/angular-skill.png'},
    {img:'/assets/img/react-skill.png'},
    {img:'/assets/img/bs4-skill.png'},
    {img:'/assets/img/html-skill.png'},
    {img:'/assets/img/css-skill.png'},
    {img:'/assets/img/js-skill.png'},
    {img:'/assets/img/sass-skill.png'},
    {img:'/assets/img/vue-skill.png'},
    {img:'/assets/img/pts-skill.png'},
    {img:'/assets/img/php-skill.png'},
  ]
  constructor() {}
}
