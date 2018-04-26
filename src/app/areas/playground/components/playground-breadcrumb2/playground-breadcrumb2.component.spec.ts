import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundBreadcrumb2Component } from './playground-breadcrumb2.component';

describe('PlaygroundBreadcrumb2Component', () => {
  let component: PlaygroundBreadcrumb2Component;
  let fixture: ComponentFixture<PlaygroundBreadcrumb2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundBreadcrumb2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundBreadcrumb2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
