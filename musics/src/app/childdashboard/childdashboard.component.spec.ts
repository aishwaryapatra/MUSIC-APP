import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilddashboardComponent } from './childdashboard.component';

describe('ChilddashboardComponent', () => {
  let component: ChilddashboardComponent;
  let fixture: ComponentFixture<ChilddashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChilddashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilddashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
