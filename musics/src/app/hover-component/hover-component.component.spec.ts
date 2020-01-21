import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverComponentComponent } from './hover-component.component';

describe('HoverComponentComponent', () => {
  let component: HoverComponentComponent;
  let fixture: ComponentFixture<HoverComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoverComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
