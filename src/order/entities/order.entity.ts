import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { OrderItem } from './order-item.entity';

export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  /*
   * Relations
   */
  @OneToMany(() => OrderItem, (OrderItem) => OrderItem.order, {
    eager: false,
  })
  orderItems: OrderItem[];
}
