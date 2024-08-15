import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { FOREST_GET_DETAIL_API, FOREST_GET_LIST_API, FOREST_UPSERT_API, ForestGetDetailRequest, ForestGetDetailResponse, ForestGetListRequest, ForestGetListResponse, ForestUpsertRequest, ForestUpsertResponse } from '@so-rung/api-interfaces';
import { ForestService } from "./forest.service";

@Controller()
export class ForestController {

    constructor(
        private readonly service: ForestService
    ) {}

    // GET LIST
    @Get(FOREST_GET_LIST_API)
    list(@Query() params: ForestGetListRequest): Promise<ForestGetListResponse> {
        return this.service.getList(params)
    }

    // GET DETAIL
    @Get(FOREST_GET_DETAIL_API)
    detail(@Query() req: ForestGetDetailRequest): Promise<ForestGetDetailResponse> {
        return this.service.getDetail(req)
    }

    // CREATE OR UPDATE
    @Post(FOREST_UPSERT_API)
    upsert(@Body() body: ForestUpsertRequest): Promise<ForestUpsertResponse> {
        return this.service.upsertForest(body)
    }
    
}