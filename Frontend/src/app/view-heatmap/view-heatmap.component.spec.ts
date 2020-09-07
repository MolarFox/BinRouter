import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHeatmapComponent } from './view-heatmap.component';

describe('ViewHeatmapComponent', () => {
  let component: ViewHeatmapComponent;
  let fixture: ComponentFixture<ViewHeatmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHeatmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
