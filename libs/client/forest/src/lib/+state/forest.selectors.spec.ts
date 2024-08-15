import { ForestEntity } from './forest.models';
import {
  forestAdapter,
  ForestPartialState,
  initialForestState,
} from './forest.reducer';
import * as ForestSelectors from './forest.selectors';

describe('Forest Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getForestId = (it: ForestEntity) => it.id;
  const createForestEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ForestEntity);

  let state: ForestPartialState;

  beforeEach(() => {
    state = {
      forest: forestAdapter.setAll(
        [
          createForestEntity('PRODUCT-AAA'),
          createForestEntity('PRODUCT-BBB'),
          createForestEntity('PRODUCT-CCC'),
        ],
        {
          ...initialForestState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Forest Selectors', () => {
    it('selectAllForest() should return the list of Forest', () => {
      const results = ForestSelectors.selectAllForest(state);
      const selId = getForestId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = ForestSelectors.selectEntity(state) as ForestEntity;
      const selId = getForestId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectForestLoaded() should return the current "loaded" status', () => {
      const result = ForestSelectors.selectForestLoaded(state);

      expect(result).toBe(true);
    });

    it('selectForestError() should return the current "error" state', () => {
      const result = ForestSelectors.selectForestError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
