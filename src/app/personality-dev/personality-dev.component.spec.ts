import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityDevComponent } from './personality-dev.component';

describe('PersonalityDevComponent', () => {
  let component: PersonalityDevComponent;
  let fixture: ComponentFixture<PersonalityDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalityDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
