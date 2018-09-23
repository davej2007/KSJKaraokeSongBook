import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongMasterComponent } from './song-master.component';

describe('SongMasterComponent', () => {
  let component: SongMasterComponent;
  let fixture: ComponentFixture<SongMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
