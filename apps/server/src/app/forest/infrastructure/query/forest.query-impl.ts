import { Injectable } from "@nestjs/common";
import { ForestQuery } from "../../queries/forest.query";
import { ForestGetDetailResponse, ForestGetListResponse, ForestListItem } from "@so-rung/api-interfaces";
import { InjectModel } from "@nestjs/mongoose";
import { ForestEntity } from "@so-rung/infra-mongo";
import { Model, Types } from "mongoose";

@Injectable()
export class ForestQueryImplement implements ForestQuery {

    constructor(
        @InjectModel(ForestEntity.name) private readonly model: Model<ForestEntity>
    ) { }


    async findAll(): Promise<ForestGetListResponse> {
        const raw_data = await this.model
            .find({}, {
                ForestOwner: 1,
                ForestLocation: 1,
                Describe: 1,
                ForestType: 1,
                Status: 1,
                DateOfPurchase: 1,
                ForestPurchase: 1,
            })

        const data: ForestListItem[] = raw_data.map((e: ForestEntity) => ({
            id: e._id.toString(),
            forest_owner: e.ForestOwner,
            forest_location: e.ForestLocation,
            describe: e.Describe,
            type_of_forest: e.ForestType,
            status: e.Status,
            date_of_purchase: e.DateOfPurchase,
            purchase_price: e.ForestPurchase.PurchasePrice
        }))

        return {
            data
        }
    }

    async findById(id: string): Promise<ForestGetDetailResponse> {
        const raw_data = await this.model
            .findOne(
                {_id: new Types.ObjectId(id)},
                {
                    ForestOwner: 1,
                    ForestLocation: 1,
                    ForestPurchase: 1,
                    Profit: 1,
                    DateOfPurchase: 1,
                    Status: 1,
                    ForestType: 1,
                    Describe: 1,
                })

        return {
            id: id,
            forest_owner: raw_data?.ForestOwner,
            forest_location: raw_data?.ForestLocation,
            profit: raw_data?.Profit,
            purchase_date: raw_data?.DateOfPurchase,
            status: raw_data?.Status,
            forest_type: raw_data?.ForestType,
            describe: raw_data?.Describe,
            
            purchase_price: raw_data?.ForestPurchase?.PurchasePrice,
            labor_cost: raw_data?.ForestPurchase?.LaborCost,
            transport_cost: raw_data?.ForestPurchase?.TransportCost,
        }
    }

}