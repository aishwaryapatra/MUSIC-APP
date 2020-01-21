import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPlaylistComponent } from './top-playlist.component';

describe('TopPlaylistComponent', () => {
  let component: TopPlaylistComponent;
  let fixture: ComponentFixture<TopPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
