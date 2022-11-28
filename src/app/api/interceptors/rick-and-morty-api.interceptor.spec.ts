import { TestBed } from '@angular/core/testing';

import { RickAndMortyApiInterceptor } from './rick-and-morty-api.interceptor';

describe('RickAndMortyApiInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RickAndMortyApiInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: RickAndMortyApiInterceptor = TestBed.inject(RickAndMortyApiInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
