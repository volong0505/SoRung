import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UpsertRecordCommand } from "../impl/upsert-record.command";
import { InjectModel } from "@nestjs/mongoose";
import { RecordEntity } from "@so-rung/infra-mongo";
import { Model } from "mongoose";
import { BadRequestException } from "@nestjs/common";

@CommandHandler(UpsertRecordCommand)
export class UpsertRecordHandler implements ICommandHandler<UpsertRecordCommand> {
   
    constructor(
        @InjectModel(RecordEntity.name) private readonly model: Model<RecordEntity>
    ) {}

    async execute(command: UpsertRecordCommand): Promise<any> {
        try {
            const { dto } = command;
            await this.model.insertMany(dto)
        } catch (error) {
            throw new BadRequestException(error.message)
        }
        return {
            message: 'Create record is success'
        }
    }

}