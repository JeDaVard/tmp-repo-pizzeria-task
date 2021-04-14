import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule } from './config/config.module';
import { typeOrmConfig } from './config/typeorm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzaModule } from './pizza/pizza.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    PizzaModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
