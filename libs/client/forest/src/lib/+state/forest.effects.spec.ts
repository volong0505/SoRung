import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as ForestActions from './forest.actions';
import { ForestEffects } from './forest.effects';

describe('ForestEffects', () => {
  let actions: Observable<Action>;
  let effects: ForestEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ForestEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ForestEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ForestActions.initForest() });

      const expected = hot('-a-|', {
        a: ForestActions.loadForestSuccess({ forest: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
