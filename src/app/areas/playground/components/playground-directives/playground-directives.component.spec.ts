import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundDirectivesComponent } from './playground-directives.component';

describe('PlaygroundDirectivesComponent', () => {
  let component: PlaygroundDirectivesComponent;
  let fixture: ComponentFixture<PlaygroundDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
