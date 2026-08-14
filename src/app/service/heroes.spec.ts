import { TestBed } from '@angular/core/testing';

import { Heroe } from './heroe';

describe('Heroe', () => {
  let service: Heroe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Heroe);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
