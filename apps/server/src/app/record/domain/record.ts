import { UnprocessableEntityException } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';


export type RecordEssentialProperties = Readonly<
    Required<{
        _id: string;
    }>
>

export type RecordOptionalProperties = Readonly<
    Partial<{
        Name: string;
        Type: string;
        DateOfPurchase: Date;
        Status: string;
        PurchaPrice: number;
        CreateAt: Date;
        UpdateAt: Date;
        DeleteAt: Date;
    }>
>

export type RecordProperties = RecordEssentialProperties & Required<RecordOptionalProperties>;

export interface Record {
    delete: () => void;
    restore: () => void;
    commit: () => void;
}

export class RecordImplement extends AggregateRoot implements Record {
    private _id: string;
    private Name: string;
    private Type: string;
    private DateOfPurchase: Date;
    private Status: string;
    private PurchaPrice: number;
    private CreateAt: Date;
    private UpdateAt: Date;
    private DeleteAt: Date;

    constructor(properties: RecordProperties) {
        super();
        Object.assign(this, properties)
    }
    
    delete(): void {
        if (this.DeleteAt)
            throw new UnprocessableEntityException('Record is already deleted!');
        this.DeleteAt = new Date();
        this.UpdateAt = new Date();
    };

    restore: () => void;

}