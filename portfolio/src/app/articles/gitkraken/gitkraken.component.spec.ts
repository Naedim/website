import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitkrakenComponent } from './gitkraken.component';

describe('GitkrakenComponent', () => {
  let component: GitkrakenComponent;
  let fixture: ComponentFixture<GitkrakenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitkrakenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitkrakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
