import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHtmlComponent } from './project-html.component';

describe('ProjectHtmlComponent', () => {
  let component: ProjectHtmlComponent;
  let fixture: ComponentFixture<ProjectHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
