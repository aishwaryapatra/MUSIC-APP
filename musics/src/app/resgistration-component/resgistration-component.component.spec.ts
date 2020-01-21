import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgistrationComponentComponent } from './resgistration-component.component';

describe('ResgistrationComponentComponent', () => {
  let component: ResgistrationComponentComponent;
  let fixture: ComponentFixture<ResgistrationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResgistrationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgistrationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
