import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdetailComponent } from './prdetail.component';

describe('PrdetailComponent', () => {
  let component: PrdetailComponent;
  let fixture: ComponentFixture<PrdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
