export const WEIGHMENT_SLIP_CREATE_API = 'weighment-slip/create';

export class WeighmentSlipCreateRequest {
    forest_id!: string;
    date!: Date;
    weight!: number;
    type!: string;
    unit_price!: number;
    transport_cost!: number;
    batch!: number;
    note!: string;
    already_paid!: string;
}

export class WeighmentSlipCreateReponse {
    message!: string;
}