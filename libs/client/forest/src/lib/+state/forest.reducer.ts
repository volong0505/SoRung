import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ForestActions from './forest.actions';
import { ForestGetDetailResponse, ForestListItem } from '@so-rung/api-interfaces';

export const FOREST_FEATURE_KEY = 'forest';

export interface ForestState {
  list: ForestListItem[],
  detail: ForestGetDetailResponse | null,
  currentId?: string | null,
  loadList?:boolean;
  loadDetail?: boolean;
  justCreated?: boolean;
  justUpdated?: boolean;
  justDeleted?: boolean;
}

export interface ForestPartialState {
  readonly [FOREST_FEATURE_KEY]: ForestState;
}

export const forestAdapter: EntityAdapter<ForestState> =
  createEntityAdapter<ForestState>();

export const initialForestState: ForestState = forestAdapter.getInitialState({
  // set initial required properties
  list: [],
  detail: null,
  currentId: null,
  loadList: false,
  loadDetail: false,
  justCreated: false,
  justUpdated: false,
  justDeleted: false
});

const reducer = createReducer(
  initialForestState,
  on(ForestActions.loadForestList, (state) => ({
    ...state,
    loadList: true,
    error: null,
  })),

  on(ForestActions.loadForestListSuccess, (state, { forest_list }) => ({
    ...state,
    loadList: false,
    list: forest_list
  })),

  on(ForestActions.loadForestListFailure, (state, { error }) => ({
    ...state,
    loadList: false,
    error,
  })),

  on(ForestActions.loadForestDetail, (state) => ({
    ...state,
    loadDetail: true,
  })),

  on(ForestActions.loadForestDetailSuccess, (state, {forest_detail}) => ({
    ...state,
    detail: forest_detail
  }))


);

export function forestReducer(state: ForestState | undefined, action: Action) {
  return reducer(state, action);
}
