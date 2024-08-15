import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { 
    FOREST_GET_DETAIL_API,
    FOREST_GET_LIST_API, FOREST_UPSERT_API, 
    ForestGetDetailRequest, 
    ForestGetDetailResponse, 
    ForestGetListRequest,
    ForestGetListResponse,
    ForestUpsertRequest,
    ForestUpsertResponse } from "@so-rung/api-interfaces";

@Injectable()
export class ForestService {

    constructor(
        private readonly http: HttpClient
    ){}
    
    getList(dto: ForestGetListRequest): Observable<ForestGetListResponse>  {
        return this.http.get<ForestGetListResponse>(FOREST_GET_LIST_API, {params: {...dto}, withCredentials: true})
    }

    getDetail(dto: ForestGetDetailRequest): Observable<ForestGetDetailResponse> {
        return this.http.get<ForestGetDetailResponse>(FOREST_GET_DETAIL_API, { params: {id: dto.id},  withCredentials: true })
    }

    upsert(dto: ForestUpsertRequest): Observable<ForestUpsertResponse> {
        return this.http.post<ForestUpsertResponse>(FOREST_UPSERT_API, dto, {withCredentials: true})
    }
}