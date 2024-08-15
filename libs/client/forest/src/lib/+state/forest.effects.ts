import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ForestGetDetailResponse, ForestGetListResponse, ForestUpsertResponse } from '@so-rung/api-interfaces';
import { catchError, map, of, switchMap } from 'rxjs';
import { ForestService } from '../forest.service';
import * as ForestActions from './forest.actions';

@Injectable()
export class ForestEffects {
  private actions$ = inject(Actions);

  constructor(
    private readonly service: ForestService
  ) {}

  init$ = createEffect(() => 
    this.actions$.pipe(
      ofType(ForestActions.loadForestList),
      switchMap((payload) =>
        this.service.getList(payload).pipe(
          map((res: ForestGetListResponse) => ForestActions.loadForestListSuccess({ forest_list: res.data })),
          catchError((error) => {
            return of(ForestActions.loadForestListFailure({ error }))
          })
        ))
  ))

  getDetail = createEffect(() =>
    this.actions$.pipe(
      ofType(ForestActions.loadForestDetail),
      switchMap((payload) =>
        this.service.getDetail(payload).pipe(
          map((res: ForestGetDetailResponse) => ForestActions.loadForestDetailSuccess({ forest_detail: res})),
          catchError((error) => {
            return of(ForestActions.loadForestDetailFailure({ error }))
          })
        )
      )
  ))

  add = createEffect(() =>
    this.actions$.pipe(
      ofType(ForestActions.addForest),
      switchMap((payload) => 
        this.service.upsert(payload).pipe(
          map((res: ForestUpsertResponse) => ForestActions.addForestSuccess()),
          catchError((error) => {
            return of(ForestActions.addForestFailure({ error}))
          })
        ))
  ))

  edit = createEffect(() =>
    this.actions$.pipe(
      ofType(ForestActions.editForest),
      switchMap((payload) => 
        this.service.upsert(payload).pipe(
          map((res: ForestUpsertResponse) => ForestActions.editForestSuccess()),
          catchError((error) => {
            return of(ForestActions.editForestFailure({ error}))
      })
    ))
  ))


}
