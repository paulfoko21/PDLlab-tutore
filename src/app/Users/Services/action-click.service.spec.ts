import { TestBed } from '@angular/core/testing';

import { ActionClickService } from './action-click.service';

describe('ActionClickService', () => {
  let service: ActionClickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionClickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
