import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";

import { RecordEntity } from "@so-rung/infra-mongo";

import { Record, RecordProperties } from "../../domain/record";
import { RecordFactory } from "../../domain/record.factory";

export class RecordRepositoryImplement {

    constructor(
        @InjectModel(RecordEntity.name) private readonly model: Model<RecordEntity>,
        private readonly factory: RecordFactory
    ) {}

    async save(record: Record): Promise<void> {
        const entity = this.modelToEntity(record);

        await this.model.updateOne(
            entity
        )
    }

    async findOne(_id: string): Promise<Record> {
        const entity = await this.model.findById({_id: _id});

        return entity ? this.entityToModel(entity) : null;
    } 

    private entityToModel(entity: RecordEntity): Record {
        return this.factory.reconstitute({
            ...entity
        })
    }

    private modelToEntity(model: Record): RecordEntity {
        const properties = JSON.parse(
            JSON.stringify(model)
        ) as RecordProperties;

        return {
            ...properties
        }
    }
}