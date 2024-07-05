export const RECORD_CREATE_API = 'record/create';

export class RecordCreateRequest  {
    name: string;
    type: string;
    date_of_purchase: Date;
    status: string;
    purchase_price: number;
}

export class RecordCreateResponse {
    message: string;
}