import { TestBed, inject } from '@angular/core/testing';

import { PageSelectorService } from './page-selector.service';

describe('PageSelectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageSelectorService]
    });
  });

  it('should be created', inject([PageSelectorService], (service: PageSelectorService) => {
    expect(service).toBeTruthy();
  }));
});
