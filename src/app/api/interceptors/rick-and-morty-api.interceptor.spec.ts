import { TestBed } from '@angular/core/testing';

import { RickAndMortyAPIInterceptor } from './rick-and-morty-api.interceptor';

describe('RickAndMortyAPIInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RickAndMortyAPIInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: RickAndMortyAPIInterceptor = TestBed.inject(RickAndMortyAPIInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
