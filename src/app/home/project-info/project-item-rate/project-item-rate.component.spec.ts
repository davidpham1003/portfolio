import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemRateComponent } from './project-item-rate.component';

describe('ProjectItemRateComponent', () => {
  let component: ProjectItemRateComponent;
  let fixture: ComponentFixture<ProjectItemRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectItemRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectItemRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
