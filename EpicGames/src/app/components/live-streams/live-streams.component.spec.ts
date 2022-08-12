import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveStreamsComponent } from './live-streams.component';

describe('LiveStreamsComponent', () => {
  let component: LiveStreamsComponent;
  let fixture: ComponentFixture<LiveStreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveStreamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
