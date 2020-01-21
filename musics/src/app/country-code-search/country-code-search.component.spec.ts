import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCodeSearchComponent } from './country-code-search.component';

describe('CountryCodeSearchComponent', () => {
  let component: CountryCodeSearchComponent;
  let fixture: ComponentFixture<CountryCodeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryCodeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCodeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
