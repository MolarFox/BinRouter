import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBinsComponent } from './view-bins.component';

describe('ViewBinsComponent', () => {
  let component: ViewBinsComponent;
  let fixture: ComponentFixture<ViewBinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
