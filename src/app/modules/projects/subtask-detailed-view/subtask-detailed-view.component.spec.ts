import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtaskDetailedViewComponent } from './subtask-detailed-view.component';

describe('SubtaskDetailedViewComponent', () => {
  let component: SubtaskDetailedViewComponent;
  let fixture: ComponentFixture<SubtaskDetailedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtaskDetailedViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtaskDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
