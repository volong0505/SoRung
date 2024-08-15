import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetForestDetailQuery } from "../impl/get-forest-detail.query";
import { ForestInjectionToken } from "../../forest.injection-token";
import { ForestQuery } from "../forest.query";
import { Inject } from "@nestjs/common";
import { ForestGetDetailResponse } from "@so-rung/api-interfaces";

@QueryHandler(GetForestDetailQuery)
export class GetForestDetailHandler implements IQueryHandler<GetForestDetailQuery> {

    @Inject(ForestInjectionToken.FOREST_QUERY) private readonly query: ForestQuery;

    execute(query: GetForestDetailQuery): Promise<ForestGetDetailResponse> {
        const { id } = query.dto;

        return this.query.findById(id)
    }

}