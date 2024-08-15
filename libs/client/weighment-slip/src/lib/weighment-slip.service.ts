import { HttpClient } from "@angular/common/http";
import { WEIGHMENT_SLIP_CREATE_API, WeighmentSlipCreateReponse, WeighmentSlipCreateRequest } from '@so-rung/api-interfaces';
import { Observable } from "rxjs";

export class WeighmentSlipService {
    constructor(
        private readonly http: HttpClient
    ) {}

    create(dto: WeighmentSlipCreateRequest): Observable<WeighmentSlipCreateReponse> {
        return this.http.post<WeighmentSlipCreateReponse>(WEIGHMENT_SLIP_CREATE_API, dto)
    }
}