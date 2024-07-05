import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'Records'})
export class RecordEntity {
    @Prop() _id: string;
    @Prop() Name: string;
    @Prop() Type: string;
    @Prop() DateOfPurchase: Date;
    @Prop() Status: string;
    @Prop() PurchaPrice: number;
    @Prop() CreateAt: Date;
    @Prop() UpdateAt: Date;
    @Prop() DeleteAt: Date;
}

export const RecordSchema = SchemaFactory.createForClass(RecordEntity)

export const RecordSchemaFeature: ModelDefinition = {
    name: RecordEntity.name,
    schema: RecordSchema
}