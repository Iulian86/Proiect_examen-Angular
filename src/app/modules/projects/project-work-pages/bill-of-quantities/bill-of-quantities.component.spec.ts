import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillOfQuantitiesComponent } from './bill-of-quantities.component';

describe('BillOfQuantitiesComponent', () => {
  let component: BillOfQuantitiesComponent;
  let fixture: ComponentFixture<BillOfQuantitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillOfQuantitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillOfQuantitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
