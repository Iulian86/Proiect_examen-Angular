import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionPageFooterComponent } from './introduction-page-footer.component';

describe('IntroductionPageFooterComponent', () => {
  let component: IntroductionPageFooterComponent;
  let fixture: ComponentFixture<IntroductionPageFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroductionPageFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionPageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
