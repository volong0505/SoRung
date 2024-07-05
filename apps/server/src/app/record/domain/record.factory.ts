import { Inject } from "@nestjs/common";
import { EventPublisher } from "@nestjs/cqrs";
import { RecordImplement, RecordProperties } from "./record";
import { Record } from './record'
type CreateRecordOptions = Readonly<{
    _id: string;
    Name: string;
    Type: string;
    DateOfPurchase: Date;
    Status: string;
    PurchaPrice: number;
}> 

export class RecordFactory {
    @Inject(EventPublisher) private readonly eventPublisher: EventPublisher;

    create(options: CreateRecordOptions): Record {
        return this.eventPublisher.mergeObjectContext(
            new RecordImplement({
                ...options,
                CreateAt: new Date(),
                DeleteAt: null,
                UpdateAt: new Date()
            })
        )
    };

    reconstitute(properties: RecordProperties): Record {
        return new RecordImplement(properties);
      }


}