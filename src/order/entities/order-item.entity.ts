import { PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Pizza } from '../../pizza/entities/pizza.entity';
import { Order } from './order.entity';

export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'smallint' })
  amount: number;

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
