import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UpsertWeighmentSlipCommand } from "../impl/upsert-weighment-slip.command";

@CommandHandler(UpsertWeighmentSlipCommand)
export class UpsertWeighmentSlipHandler implements ICommandHandler<UpsertWeighmentSlipCommand> {

    
    execute(command: UpsertWeighmentSlipCommand): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}