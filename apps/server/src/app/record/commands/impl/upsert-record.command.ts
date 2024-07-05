import { UpsertRecordDto } from "../../dtos";

export class UpsertRecordCommand {
    constructor(public readonly dto: UpsertRecordDto) {}
}