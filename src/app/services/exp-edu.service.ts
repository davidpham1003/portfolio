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
      des: 'Studying and working as an intern at CyberSoft Academy',
    },
    {
      year: '03/2020 - 11/2020',
      position: 'Intership',
      company: 'Cybersoft Academy',
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
  constructor() {}
}
