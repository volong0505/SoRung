import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetForestListQuery } from "../impl/get-forest-list.query";
import { ForestInjectionToken } from "../../forest.injection-token";
import { ForestQuery } from "../forest.query";
import { Inject } from "@nestjs/common";

@QueryHandler(GetForestListQuery)
export class GetForestListHandler implements IQueryHandler<GetForestListQuery> {

    @Inject(ForestInjectionToken.FOREST_QUERY) private readonly query: ForestQuery
    
    execute(query: GetForestListQuery): Promise<any> {

        return this.query.findAll();

    }

}