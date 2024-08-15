export const FOREST_GET_DETAIL_API = 'forest/get-detail-api';

export class ForestGetDetailRequest {
    id!: string;
}

export class ForestGetDetailResponse {
    id?: string;
    forest_owner!: string;
    forest_location!: string;
    purchase_price!: number;
    profit!: number;
    purchase_date!: Date;
    status!: string;
    forest_type!: "KEO" | "CAO SU";
    describe!: string;
    labor_cost!: number;
    transport_cost!: number;
}