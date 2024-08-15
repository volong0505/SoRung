import { UnprocessableEntityException } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';
import { Forest_Purchase } from '@so-rung/infra-mongo';

export type ForestEssentialProperties = Readonly<
    Required<{
        _id: string;
    }>
>

export type ForestOptionalProperties = Readonly<
    Partial<{
        ForestOwner: string;
        ForestLocation: string;
        ForestType: "KEO" | "CAO SU";
        ForestPurchase: Forest_Purchase;
        DateOfPurchase: Date;
        Status: string;
        Profit: number;
        Describe: string
        CreateAt: Date;
        UpdateAt: Date;
        DeleteAt: Date;
    }>
>

export type ForestProperties = ForestEssentialProperties & Required<ForestOptionalProperties>;

export interface Forest {
    delete: () => void;
    restore: () => void;
    commit: () => void;
}

export class ForestImplement extends AggregateRoot implements Forest {
    private _id: string;
    private Name: string;
    private Type: string;
    private DateOfPurchase: Date;
    private Status: string;
    private PurchaPrice: number;
    Profit: number;
    private CreateAt: Date;
    private UpdateAt: Date;
    private DeleteAt: Date;

    constructor(properties: ForestProperties) {
        super();
        Object.assign(this, properties)
    }

    delete(): void {
        if (this.DeleteAt)
            throw new UnprocessableEntityException('Forest is already deleted!');
        this.DeleteAt = new Date();
        this.UpdateAt = new Date();
    };

    restore: () => void;

}