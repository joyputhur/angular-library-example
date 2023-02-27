import { TestBed } from '@angular/core/testing';

import { LayoutLibraryService } from './layout-library.service';

describe('LayoutLibraryService', () => {
  let service: LayoutLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
