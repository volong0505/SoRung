import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

export class Forest_Purchase {
    @Prop() PurchasePrice: number;
    @Prop() TransportCost: number;
    @Prop() LaborCost: number;
}

export class Forest_WeighmentSlip {
    @Prop() _id: string;
    @Prop() Date: Date;
    @Prop() Weight: number;
    @Prop() Type: string;
    @Prop() UnitPrice: number;
    @Prop() TransportCost: number;
    @Prop() LaborCost: number;
    @Prop() Batch: number;
    @Prop() Note: string;
    @Prop() AlreadyPaid: boolean;
    @Prop() CreateAt: Date;
    @Prop() UpdateAt: Date;
    @Prop() DeleteAt: Date;
}

@Schema({ collection: 'Forests'})
export class ForestEntity {
    @Prop({ type: Types.ObjectId}) _id: string;
    @Prop() ForestOwner: string;
    @Prop() ForestLocation: string;
    @Prop() ForestType: "KEO" | "CAO SU";
    @Prop() Profit: number;
    @Prop() ForestPurchase: Forest_Purchase;
    @Prop() Status: string;
    @Prop() Describe: string;
    @Prop() PurchaseDate: Date;
    @Prop() CreateAt: Date;
    @Prop() UpdateAt: Date;
    @Prop() DeleteAt: Date;
    @Prop() WeighmentSlip?: Forest_WeighmentSlip[]
}

export const ForestSchema = SchemaFactory.createForClass(ForestEntity)

export const ForestSchemaFeature: ModelDefinition = {
    name: ForestEntity.name,
    schema: ForestSchema
}