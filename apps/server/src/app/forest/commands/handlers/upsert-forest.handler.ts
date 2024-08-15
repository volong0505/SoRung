import { BadRequestException, Inject } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ForestFactory } from "../../domain/forest.factory";
import { ForestRepository } from "../../domain/forest.repository";
import { ForestInjectionToken } from "../../forest.injection-token";
import { UpsertForestCommand } from "../impl/upsert-forest.command";

@CommandHandler(UpsertForestCommand)
export class UpsertForestHandler implements ICommandHandler<UpsertForestCommand> {
   
   @Inject(ForestInjectionToken.FOREST_REPOSITORY) private readonly repository: ForestRepository;
   @Inject() private readonly forestFactory: ForestFactory

    async execute(command: UpsertForestCommand): Promise<any> {
        try {
            const { dto } = command;
            const _id = dto.id;
            delete dto.id;
            const forest = this.forestFactory.create({
                ...dto,
                ForestType: dto.ForestType as "KEO" | "CAO SU",
                _id,
            });


            await this.repository.saveOne(forest)
            forest.commit()

        } catch (error) {
            throw new BadRequestException(error.message)
        }
        return {
            message: 'Create record is success'
        }
    }

}