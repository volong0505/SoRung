import { Action } from '@ngrx/store';

import * as ForestActions from './forest.actions';
import { ForestEntity } from './forest.models';
import {
  ForestState,
  initialForestState,
  forestReducer,
} from './forest.reducer';

describe('Forest Reducer', () => {
  const createForestEntity = (id: string, name = ''): ForestEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Forest actions', () => {
    it('loadForestSuccess should return the list of known Forest', () => {
      const forest = [
        createForestEntity('PRODUCT-AAA'),
        createForestEntity('PRODUCT-zzz'),
      ];
      const action = ForestActions.loadForestSuccess({ forest });

      const result: ForestState = forestReducer(initialForestState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = forestReducer(initialForestState, action);

      expect(result).toBe(initialForestState);
    });
  });
});
