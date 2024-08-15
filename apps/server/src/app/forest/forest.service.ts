import { Injectable } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ForestGetDetailRequest, ForestGetDetailResponse, ForestGetListRequest, ForestGetListResponse, ForestUpsertRequest, ForestUpsertResponse } from "@so-rung/api-interfaces";
import { UpsertForestDto } from "./dtos";
import { UpsertForestCommand } from "./commands/impl/upsert-forest.command";
import { GetForestListQuery } from "./queries/impl/get-forest-list.query";
import { GetForestDetailQuery } from "./queries/impl/get-forest-detail.query";

@Injectable()
export class ForestService {
    
    constructor(
        private readonly queryBus: QueryBus,
        private readonly commandBus: CommandBus
    ) {}

    upsertForest(params: ForestUpsertRequest): Promise<ForestUpsertResponse>{
        const dto: UpsertForestDto = {
            id: params.id,
            ForestOwner: params.forest_owner,
            ForestLocation: params.forest_location,
            DateOfPurchase: params.purchase_date,
            Profit: params.profit,
            Status: params.status,
            ForestType: params.forest_type,
            Describe: params.describe,
            ForestPurchase: {
                PurchasePrice: params.purchase_price,
                TransportCost: params.transport_cost,
                LaborCost: params.labor_cost
            }
        }

        return this.commandBus.execute(new UpsertForestCommand(dto))
    }

    getList(params: ForestGetListRequest): Promise<ForestGetListResponse> {
        const dto = {}
        return this.queryBus.execute(new GetForestListQuery(dto))
    }

    getDetail(params: ForestGetDetailRequest): Promise<ForestGetDetailResponse> {
        return this.queryBus.execute(new GetForestDetailQuery(params))
    }
}