import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SublevelAComponent } from './sublevel-a.component';

describe('SublevelAComponent', () => {
  let component: SublevelAComponent;
  let fixture: ComponentFixture<SublevelAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SublevelAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SublevelAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
