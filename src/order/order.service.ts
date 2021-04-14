import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { OrderRepository } from './order.repository';
import { OrderItem } from './entities/order-item.entity';
import { OrderItemRepository } from './orderItem.repository';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private orderRepository: OrderRepository,
    @InjectRepository(OrderItem)
    private orderItemRepository: OrderItemRepository,
  ) {}
  async create(createOrderDto: CreateOrderDto) {
    const order = this.orderRepository.create({
      orderItems: createOrderDto.items.map((item) => ({
        quantity: item.quantity,
        item: { id: item.pizza },
      })),
    });
    await order.save();
    return order;
  }

  findAll() {
    return (
      this.orderRepository
        .createQueryBuilder('order')
        .leftJoinAndSelect('order.orderItems', 'orderItems')
        // .from(Order, 'order')
        // .innerJoinAndSelect('order.order_items', 'order_items')
        .getMany()
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }
}
