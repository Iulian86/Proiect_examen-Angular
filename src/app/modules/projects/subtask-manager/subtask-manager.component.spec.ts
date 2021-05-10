import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtaskManagerComponent } from './subtask-manager.component';

describe('SubtaskManagerComponent', () => {
  let component: SubtaskManagerComponent;
  let fixture: ComponentFixture<SubtaskManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtaskManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtaskManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
