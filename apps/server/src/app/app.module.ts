import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfraMongoModule } from '@so-rung/infra-mongo';
import { Config } from '../../config';

@Module({
  imports: [
    InfraMongoModule.register(Config.MONGO_URI)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
