import { ForestGetDetailResponse, ForestGetListResponse } from "@so-rung/api-interfaces"

export interface ForestQuery {
    
    findById: (id: string) => Promise<ForestGetDetailResponse>

    findAll: () => Promise<ForestGetListResponse>
}