import { Module } from "@nestjs/common";
import { RecordService } from "./record.service";
import { record_commands } from "./commands";

@Module({
    imports: [],
    controllers: [],
    providers: [
        RecordService,
        ...record_commands
    ]
})
export class RecordModule {}