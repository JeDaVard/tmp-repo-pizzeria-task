import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderRepository } from './order.repository';
import { OrderItemRepository } from './orderItem.repository';

@Module({
  imports: [TypeOrmModule.forFeature([OrderRepository, OrderItemRepository])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
