import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCompComponent } from './footer-comp.component';

describe('FooterCompComponent', () => {
  let component: FooterCompComponent;
  let fixture: ComponentFixture<FooterCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
