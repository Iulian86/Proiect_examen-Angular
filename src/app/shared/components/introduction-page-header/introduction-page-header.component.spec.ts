import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionPageHeaderComponent } from './introduction-page-header.component';

describe('IntroductionPageHeaderComponent', () => {
  let component: IntroductionPageHeaderComponent;
  let fixture: ComponentFixture<IntroductionPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroductionPageHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
