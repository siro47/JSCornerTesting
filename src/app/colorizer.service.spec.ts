import { TestBed, inject } from '@angular/core/testing';

import { ColorizerService } from './colorizer.service';

describe('ColorizerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorizerService]
    });
  });

  it('should be created', inject([ColorizerService], (service: ColorizerService) => {
    expect(service).toBeTruthy();
  }));
});
