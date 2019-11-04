  import { TestBed } from '@angular/core/testing';

import { OrphelinService } from './orphelin.service';

describe('OrphelinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrphelinService = TestBed.get(OrphelinService);
    expect(service).toBeTruthy();
  });
});
