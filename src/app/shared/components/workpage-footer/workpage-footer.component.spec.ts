import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpageFooterComponent } from './workpage-footer.component';

describe('WorkpageFooterComponent', () => {
  let component: WorkpageFooterComponent;
  let fixture: ComponentFixture<WorkpageFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkpageFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkpageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
