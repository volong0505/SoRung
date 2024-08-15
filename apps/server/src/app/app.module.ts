import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfraMongoModule } from '@so-rung/infra-mongo';
import { Config } from '../../config';
import { ForestModule } from './forest/forest.module';

@Module({
  imports: [
    InfraMongoModule.register(Config.MONGO_URI),
    ForestModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
