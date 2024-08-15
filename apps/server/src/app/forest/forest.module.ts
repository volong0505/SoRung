import { Module, Provider } from "@nestjs/common";
import { ForestService } from "./forest.service";
import { forest_commands } from "./commands";
import { CqrsModule } from "@nestjs/cqrs";
import { MongooseModule } from "@nestjs/mongoose";
import { ForestSchemaFeature } from "@so-rung/infra-mongo";
import { ForestController } from "./forest.controller";
import { ForestInjectionToken } from "./forest.injection-token";
import { ForestRepositoryImplement } from "./infrastructure/repository/forest.repository-impl";
import { ForestQueryImplement } from "./infrastructure/query/forest.query-impl";
import { ForestFactory } from "./domain/forest.factory";
import { forest_queries } from "./queries";

    const infrastructure: Provider[] = [
        {
            provide: ForestInjectionToken.FOREST_REPOSITORY,
            useClass: ForestRepositoryImplement
        },
        {
            provide: ForestInjectionToken.FOREST_QUERY,
            useClass: ForestQueryImplement
        }
    ]
    
    const domains = [ ForestFactory ]

@Module({
    imports: [
        CqrsModule,
        MongooseModule.forFeature([
            ForestSchemaFeature
        ])
    ],
    controllers: [
        ForestController
    ],
    providers: [
        ForestService,
        ...forest_commands,
        ...forest_queries,
        ...infrastructure,
        ...domains
    ]
})
export class ForestModule {}