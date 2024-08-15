export const FOREST_UPSERT_API = 'record/upsert';

export class ForestUpsertRequest {
    id?: string;
    forest_owner!: string;
    forest_location!: string;
    purchase_price!: number;
    profit!: number;
    purchase_date!: Date;
    status!: string;
    forest_type!: string;
    describe!: string;
    labor_cost!: number;
    transport_cost!: number;
}

export class ForestUpsertResponse {
    message!: string;
}