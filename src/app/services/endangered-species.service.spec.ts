import { TestBed } from '@angular/core/testing';

import { EndangeredSpeciesService } from './endangered-species.service';

describe('EndangeredSpeciesService', () => {
  let service: EndangeredSpeciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndangeredSpeciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
