import { TestBed, inject } from '@angular/core/testing';

import { YoutubeInfoService } from './youtube-info.service';

describe('YoutubeInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoutubeInfoService]
    });
  });

  it('should be created', inject([YoutubeInfoService], (service: YoutubeInfoService) => {
    expect(service).toBeTruthy();
  }));
});
