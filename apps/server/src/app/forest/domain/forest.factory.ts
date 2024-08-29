import { Inject } from "@nestjs/common";
import { EventPublisher } from "@nestjs/cqrs";
import { ForestImplement, ForestProperties } from "./forest";
import { Forest } from './forest'
import { Forest_Purchase } from "@so-rung/infra-mongo";

type CreateForestOptions = Readonly<{
    _id: string;
    ForestOwner: string;
    ForestLocation: string;
    ForestType: "KEO" | "CAO SU";
    Profit: number;
    ForestPurchase: Forest_Purchase;
    PurchaseDate: Date;
    Status: string;
    Describe: string
}> 

export class ForestFactory {
    @Inject(EventPublisher) private readonly eventPublisher: EventPublisher;

    create(options: CreateForestOptions): Forest {
        return this.eventPublisher.mergeObjectContext(
            new ForestImplement({
                ...options,
                CreateAt: new Date(),
                DeleteAt: null,
                UpdateAt: new Date()
            })
        )
    };

    reconstitute(properties: ForestProperties): Forest {
        return new ForestImplement(properties);
      }


}