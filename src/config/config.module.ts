import { ConfigModule as Config } from '@nestjs/config';
import { Module } from '@nestjs/common';
import * as Joi from '@hapi/joi';

@Module({
  imports: [
    Config.forRoot({
      envFilePath: ['.env', '.env.development'],
      validationSchema: Joi.object({
        MYSQL_HOST: Joi.string().required(),
        MYSQL_PORT: Joi.string().required(),
        MYSQL_DATABASE: Joi.string().required(),
        MYSQL_USERNAME: Joi.string().required(),
        MYSQL_PASSWORD: Joi.string().required(),
      }),
    }),
  ],
})
export class ConfigModule {}
