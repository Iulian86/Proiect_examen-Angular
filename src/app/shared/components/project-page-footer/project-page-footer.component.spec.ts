import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPageFooterComponent } from './project-page-footer.component';

describe('ProjectPageFooterComponent', () => {
  let component: ProjectPageFooterComponent;
  let fixture: ComponentFixture<ProjectPageFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPageFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
