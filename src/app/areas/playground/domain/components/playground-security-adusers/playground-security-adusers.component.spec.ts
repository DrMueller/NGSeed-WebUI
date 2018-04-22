import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundSecurityAdusersComponent } from './playground-security-adusers.component';

describe('PlaygroundSecurityAdusersComponent', () => {
  let component: PlaygroundSecurityAdusersComponent;
  let fixture: ComponentFixture<PlaygroundSecurityAdusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundSecurityAdusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundSecurityAdusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
