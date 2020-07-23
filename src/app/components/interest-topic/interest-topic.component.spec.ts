import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestTopicComponent } from './interest-topic.component';

describe('InterestTopicComponent', () => {
  let component: InterestTopicComponent;
  let fixture: ComponentFixture<InterestTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
