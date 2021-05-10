import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpageHeaderComponent } from './workpage-header.component';

describe('WorkpageHeaderComponent', () => {
  let component: WorkpageHeaderComponent;
  let fixture: ComponentFixture<WorkpageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkpageHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkpageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
