export const FOREST_GET_LIST_API = 'forest/get-list-api';

export class ForestGetListRequest {
    page!: number;
    limit!: number
}

export class ForestListItem {
    id!: string;
    forest_owner!: string;
    forest_location!: string;
    describe!: string;
    type_of_forest!: string;
    status!: string;
    date_of_purchase!: Date;
    purchase_price!: number;
}

export class ForestGetListResponse {
    data!: ForestListItem[]
}