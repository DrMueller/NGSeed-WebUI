import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundBreadcrumbsComponent } from './playground-breadcrumbs.component';

describe('PlaygroundBreadcrumbsComponent', () => {
  let component: PlaygroundBreadcrumbsComponent;
  let fixture: ComponentFixture<PlaygroundBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundBreadcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
