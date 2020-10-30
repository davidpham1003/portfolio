import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {themes} from './const'

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  color =  JSON.parse(localStorage.getItem('color'));

  private activeTheme = new BehaviorSubject(this.color ? this.color : 'green');
  public getActiveTheme = this.activeTheme.asObservable();
  setActiveTheme(value){
    this.activeTheme.next(value);
  }
  arrayTheme = []
  getArray(){
    for(let key in themes){
      this.arrayTheme = [...this.arrayTheme,{name:key,color:themes[key].value}]
    }
    return this.arrayTheme;
  }
  constructor() { }
}
