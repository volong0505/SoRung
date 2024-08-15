import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  FOREST_FEATURE_KEY,
  ForestState,
  forestAdapter,
} from './forest.reducer';

// Lookup the 'Forest' feature state managed by NgRx
export const selectForestState =
  createFeatureSelector<ForestState>(FOREST_FEATURE_KEY);

const { selectAll, selectEntities } = forestAdapter.getSelectors();

// export const selectForestLoaded = createSelector(
//   selectForestState,
//   (state: ForestState) => state.loaded
// );

// export const selectForestError = createSelector(
//   selectForestState,
//   (state: ForestState) => state.error
// );

export const selectForestList = createSelector(
  selectForestState,
  (state: ForestState) => state.list
);

export const selectDetailForest = createSelector(
  selectForestState,
  (state: ForestState) => state.detail
)

// export const selectForestEntities = createSelector(
//   selectForestState,
//   (state: ForestState) => selectEntities(state)
// );

// export const selectSelectedId = createSelector(
//   selectForestState,
//   (state: ForestState) => state.selectedId
// );

// export const selectEntity = createSelector(
//   selectForestEntities,
//   selectSelectedId,
//   (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
// );
