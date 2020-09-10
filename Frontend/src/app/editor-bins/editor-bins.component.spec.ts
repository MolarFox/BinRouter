import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorBinsComponent } from './editor-bins.component';

describe('EditorBinsComponent', () => {
  let component: EditorBinsComponent;
  let fixture: ComponentFixture<EditorBinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorBinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorBinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
