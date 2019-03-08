import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologicComponent } from './technologic.component';

describe('TechnologicComponent', () => {
  let component: TechnologicComponent;
  let fixture: ComponentFixture<TechnologicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
