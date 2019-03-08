import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VagrantComponent } from './vagrant.component';

describe('VagrantComponent', () => {
  let component: VagrantComponent;
  let fixture: ComponentFixture<VagrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VagrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VagrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
