import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWorkPagesComponent } from './project-work-pages.component';

describe('ProjectWorkPagesComponent', () => {
  let component: ProjectWorkPagesComponent;
  let fixture: ComponentFixture<ProjectWorkPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectWorkPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectWorkPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
