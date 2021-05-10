import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpageSidebarComponent } from './workpage-sidebar.component';

describe('WorkpageSidebarComponent', () => {
  let component: WorkpageSidebarComponent;
  let fixture: ComponentFixture<WorkpageSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkpageSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkpageSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
