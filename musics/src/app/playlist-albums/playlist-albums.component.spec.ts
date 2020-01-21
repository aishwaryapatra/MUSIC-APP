import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistAlbumsComponent } from './playlist-albums.component';

describe('PlaylistAlbumsComponent', () => {
  let component: PlaylistAlbumsComponent;
  let fixture: ComponentFixture<PlaylistAlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistAlbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
