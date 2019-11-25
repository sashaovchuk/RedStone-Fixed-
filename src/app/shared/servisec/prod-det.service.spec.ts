import { TestBed } from '@angular/core/testing';

import { ProdDetService } from './prod-det.service';

describe('ProdDetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdDetService = TestBed.get(ProdDetService);
    expect(service).toBeTruthy();
  });
});
