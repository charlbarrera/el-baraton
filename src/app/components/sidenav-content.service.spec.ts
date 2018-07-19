import { TestBed, inject } from '@angular/core/testing';

import { SidenavContentService } from './sidenav-content.service';

describe('SidenavContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidenavContentService]
    });
  });

  it('should be created', inject([SidenavContentService], (service: SidenavContentService) => {
    expect(service).toBeTruthy();
  }));
});
