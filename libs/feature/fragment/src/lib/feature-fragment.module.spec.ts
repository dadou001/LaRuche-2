import { async, TestBed } from '@angular/core/testing';
import { FeatureFragmentModule } from './feature-fragment.module';

describe('FeatureFragmentModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureFragmentModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureFragmentModule).toBeDefined();
  });
});
