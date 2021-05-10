import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidLogComponent } from './raid-log.component';

describe('RaidLogComponent', () => {
  let component: RaidLogComponent;
  let fixture: ComponentFixture<RaidLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaidLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
