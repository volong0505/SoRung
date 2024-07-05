import { Injectable } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { RecordCreateRequest, RecordCreateResponse } from "@so-rung/api-interfaces";
import { UpsertRecordDto } from "./dtos";
import { UpsertRecordCommand } from "./commands/impl/upsert-record.command";

@Injectable()
export class RecordService {
    
    constructor(
        private readonly queryBus: QueryBus,
        private readonly commandBus: CommandBus
    ) {}

    addRecord(params: RecordCreateRequest): Promise<RecordCreateResponse>{
        const dto: UpsertRecordDto = {
            Name: params.name,
            Type: params.type,
            DateOfPurchase: params.date_of_purchase,
            Status: params.status,
            PurchaPrice: params.purchase_price
        }

        return this.commandBus.execute(new UpsertRecordCommand(dto))
    }
}