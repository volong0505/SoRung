import { Forest_Purchase } from "@so-rung/infra-mongo";

export class UpsertForestDto {
    id?: string;
    ForestOwner: string;
    ForestLocation: string;
    ForestPurchase: Forest_Purchase;
    DateOfPurchase: Date;
    Profit: number;
    Status: string;
    ForestType: string;
    Describe: string;
}