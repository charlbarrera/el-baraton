import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SublevelBComponent } from './sublevel-b.component';

describe('SublevelBComponent', () => {
  let component: SublevelBComponent;
  let fixture: ComponentFixture<SublevelBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SublevelBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SublevelBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
