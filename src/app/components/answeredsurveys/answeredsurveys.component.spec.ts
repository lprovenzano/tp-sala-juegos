import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsweredsurveysComponent } from './answeredsurveys.component';

describe('AnsweredsurveysComponent', () => {
  let component: AnsweredsurveysComponent;
  let fixture: ComponentFixture<AnsweredsurveysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnsweredsurveysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnsweredsurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
