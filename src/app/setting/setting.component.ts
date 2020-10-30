import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/themes/theme.service';
//

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  isShow: boolean = false;
  active: string ;
  arrayTheme: any[];
  themes: any[] = [];
  constructor(private theme: ThemeService) {}
  toggleTheme(value) {
    this.theme.setActiveTheme(value);
    localStorage.setItem('color',JSON.stringify(value))
  }
  ngOnInit(): void {
    // const color = JSON.parse(localStorage.getItem('color'));
    // this.active = color;
    this.arrayTheme = this.theme.getArray();
    this.theme.getActiveTheme.subscribe((data) => {
      this.active = data;
    });
    // this.themes = themes2
    console.log(this.arrayTheme);
  }
}
