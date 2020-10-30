import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from './theme.service';
import { themes } from './const';

@Directive({
  selector: '[appTheme]',
})
export class ThemeDirective implements OnInit, OnDestroy {
  private themeName:string ;
  private themServiceSubscription: Subscription;
  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: any,
    private themeService: ThemeService
  ) {}

  updateTheme(themeName) {
    const element = this.elementRef.nativeElement;
    const them = themes[themeName];
    // console.log(this.themeName)
    for (const key in them) {
      element.style.setProperty(key, them[key]);
      this.document.body.style.setProperty(key, them[key]);
    }
  }
  ngOnInit() {
    const color = JSON.parse(localStorage.getItem('color'));
    this.themeName = color;
    // this.updateTheme(this.themeName);
    this.themeService.getActiveTheme.subscribe((themeName) => {
      this.themeName = themeName;
      this.updateTheme(this.themeName);
    });
  }
  ngOnDestroy() {
    if (this.themServiceSubscription)
      this.themServiceSubscription.unsubscribe();
  }
}
