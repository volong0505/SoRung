export const FOREST_GET_LIST_API = 'forest/get-list-api';

export class ForestGetListRequest {
    page!: number;
    limit!: number
}

export class ForestListItem {
    id!: string;
    forest_owner!: string;
    forest_location!: string;
    forest_type!: "KEO" | "CAO SU";

    describe!: string;
    status!: string;
    purchase_date!: Date;
    purchase_price!: number;
    profit!: number;
    labor_cost!: number;
    transport_cost!: number;
}

export class ForestGetListResponse {
    data!: ForestListItem[]
}