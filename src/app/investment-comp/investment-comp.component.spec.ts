import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentCompComponent } from './investment-comp.component';

describe('InvestmentCompComponent', () => {
  let component: InvestmentCompComponent;
  let fixture: ComponentFixture<InvestmentCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
