import { TestBed } from '@angular/core/testing';

import { StatsSignalrService } from './stats-signalr.service';

describe('StatsSignalrService', () => {
  let service: StatsSignalrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatsSignalrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
