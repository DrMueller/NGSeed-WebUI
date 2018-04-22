import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundSecurityPoliciesComponent } from './playground-security-policies.component';

describe('PlaygroundSecurityPoliciesComponent', () => {
  let component: PlaygroundSecurityPoliciesComponent;
  let fixture: ComponentFixture<PlaygroundSecurityPoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundSecurityPoliciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundSecurityPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
