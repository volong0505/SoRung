import { UpsertForestDto } from "../../dtos";

export class UpsertForestCommand {
    constructor(public readonly dto: UpsertForestDto) {}
}