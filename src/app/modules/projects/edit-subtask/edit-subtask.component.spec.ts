import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubtaskComponent } from './edit-subtask.component';

describe('EditSubtaskComponent', () => {
  let component: EditSubtaskComponent;
  let fixture: ComponentFixture<EditSubtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSubtaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
