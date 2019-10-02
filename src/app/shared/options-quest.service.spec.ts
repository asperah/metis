import { TestBed } from '@angular/core/testing';

import { OptionsQuestService } from './options-quest.service';

describe('OptionsQuestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OptionsQuestService = TestBed.get(OptionsQuestService);
    expect(service).toBeTruthy();
  });
});
