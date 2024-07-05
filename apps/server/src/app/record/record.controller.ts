import { Body, Controller, Post } from "@nestjs/common";
import { RecordService } from "./record.service";
import { RECORD_CREATE_API, RecordCreateRequest, RecordCreateResponse } from '@so-rung/api-interfaces';

@Controller()
export class RecordController {

    constructor(
        private readonly service: RecordService
    ) {}

    @Post(RECORD_CREATE_API)
    create(@Body() body: RecordCreateRequest): Promise<RecordCreateResponse> {
        return this.service.addRecord(body)
    }
}