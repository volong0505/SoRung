import { Model, ObjectId, Types } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";

import { ForestEntity } from "@so-rung/infra-mongo";

import { Forest, ForestProperties } from "../../domain/forest";
import { ForestFactory } from "../../domain/forest.factory";
import { ForestRepository } from '../../domain/forest.repository';

export class ForestRepositoryImplement implements ForestRepository{

    constructor(
        @InjectModel(ForestEntity.name) private readonly model: Model<ForestEntity>,
        private readonly factory: ForestFactory
    ) { }

    async saveOne(forest: Forest): Promise<void> {
        const entity = this.modelToEntity(forest);
        const _id = new Types.ObjectId(entity._id || null);
        delete entity._id;
        await this.model.findByIdAndUpdate(
           _id,
            entity,
            {
                upsert: true
            }
        )
    }

    async findOne(_id: string): Promise<Forest> {
        const entity = await this.model.findById({ _id: _id });

        return entity ? this.entityToModel(entity) : null;
    }

    private entityToModel(entity: ForestEntity): Forest {
        return this.factory.reconstitute({
            ...entity,
            _id: entity._id.toString()
        })
    }

    private modelToEntity(model: Forest): ForestEntity {
        const properties = JSON.parse(
            JSON.stringify(model)
        ) as ForestProperties;

        return {
            _id: new Types.ObjectId(properties._id),
            ...properties,
        }
    }
}