import { TestBed } from '@angular/core/testing';

import { CustomButtonService } from './custom-button.service';

describe('CustomButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomButtonService = TestBed.get(CustomButtonService);
    expect(service).toBeTruthy();
  });
});
