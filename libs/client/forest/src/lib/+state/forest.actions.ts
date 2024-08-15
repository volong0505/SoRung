import { createAction, props } from '@ngrx/store';
import {  ForestGetDetailRequest, ForestGetDetailResponse, ForestGetListRequest, ForestListItem, ForestUpsertRequest } from '@so-rung/api-interfaces';

export const ForestActionTypes = {
  GET_ALL: 'GET ALL',
  GEL_ALL_SUCCESS: 'GET ALL SUCCESS',
  GET_ALL_FAILURE: 'GET ALL FAILURE',

  GET_DETAIL: 'GET DETAIL',
  GET_DETAIL_SUCCESS: 'GET DETAIL SUCCESS',
  GET_DETAIL_FAILURE: 'GET DETAIL FAILURE',

  ADD: 'ADD DETAIL',
  ADD_SUCCESS: 'ADD SUCCESS',
  ADD_FAILURE: 'ADD FAILURE',

  UPDATE: 'UPDATE DETAIL',
  UPDATE_SUCCESS: 'UPDATE SUCCESS',
  UPDATE_FAILURE: 'UPDATE FAILURE',

  DELETE: 'DELETE DETAIL',
  DELETE_SUCCESS: 'DELETE SUCCESS',
  DELETE_FAILURE: 'DELETE FAILURE',
}

// GET LIST
export const loadForestList = createAction(
  ForestActionTypes.GET_ALL,
  props<ForestGetListRequest>()
  );

export const loadForestListSuccess = createAction(
  ForestActionTypes.GEL_ALL_SUCCESS,
  props<{ forest_list: ForestListItem[] }>()
);

export const loadForestListFailure = createAction(
  ForestActionTypes.GET_ALL_FAILURE,
  props<{ error: any }>()
);

// GET DETAIL
export const loadForestDetail = createAction(
  ForestActionTypes.GET_DETAIL,
  props<ForestGetDetailRequest>()
)

export const loadForestDetailSuccess = createAction(
  ForestActionTypes.GET_DETAIL_SUCCESS,
  props<{ forest_detail: ForestGetDetailResponse}>()
);

export const loadForestDetailFailure = createAction(
  ForestActionTypes.GET_DETAIL_FAILURE,
  props<{ error: any}>()
)


// ADD FOREST
export const addForest = createAction(
  ForestActionTypes.ADD,
  props<ForestUpsertRequest>()
)

export const addForestSuccess = createAction(
  ForestActionTypes.ADD_SUCCESS
)

export const addForestFailure = createAction (
  ForestActionTypes.ADD_FAILURE,
  props<{ error: any}>()
)


// EDIT FOREST
export const editForest = createAction(
  ForestActionTypes.UPDATE,
  props<ForestUpsertRequest>()
)

export const editForestSuccess = createAction(
  ForestActionTypes.UPDATE_SUCCESS
)

export const editForestFailure = createAction (
  ForestActionTypes.UPDATE_FAILURE,
  props<{ error: any}>()
)

// DELETE FOREST
export const deleteForest = createAction(
  ForestActionTypes.DELETE,
  props<{id: string}>()
)

export const deleteForestSuccess = createAction(
  ForestActionTypes.DELETE_SUCCESS
)

export const deleteForestFailure = createAction (
  ForestActionTypes.DELETE_FAILURE,
  props<{ error: any}>()
)

