import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Entity,
  BaseEntity,
} from 'typeorm';
import { Pizza } from '../../pizza/entities/pizza.entity';
import { Order } from './order.entity';

@Entity('order_items')
export class OrderItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'smallint' })
  quantity: number;

  /*
   * Relations
   */
  @ManyToOne(() => Order, (Order) => Order.orderItems, {
    eager: false,
  })
  order: Order;

  @ManyToOne(() => Pizza, (Pizza) => Pizza.orderItems, {
    eager: false,
  })
  item: Pizza;
}
