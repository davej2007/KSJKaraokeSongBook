import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsearchtableComponent } from './songsearchtable.component';

describe('SongsearchtableComponent', () => {
  let component: SongsearchtableComponent;
  let fixture: ComponentFixture<SongsearchtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsearchtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsearchtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
