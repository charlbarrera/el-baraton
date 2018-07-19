import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SublevelCComponent } from './sublevel-c.component';

describe('SublevelCComponent', () => {
  let component: SublevelCComponent;
  let fixture: ComponentFixture<SublevelCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SublevelCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SublevelCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
