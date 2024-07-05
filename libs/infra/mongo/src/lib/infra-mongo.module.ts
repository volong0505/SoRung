import { DynamicModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoSchemas } from '.';

@Module({})
export class InfraMongoModule {
  static register(mongoConnectionURI: string): DynamicModule {
    return {
      module: InfraMongoModule,
      imports: [
        MongooseModule.forRoot(mongoConnectionURI),
        MongooseModule.forFeature([
          ...mongoSchemas
        ])
      ],
      exports: [
        MongooseModule
      ]
    }
  }
}
