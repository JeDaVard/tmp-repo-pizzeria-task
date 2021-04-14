import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Entity,
  BaseEntity,
  JoinColumn,
} from 'typeorm';
import { OrderItem } from './order-item.entity';

@Entity('orders')
export class Order extends BaseEntity {
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
  @JoinColumn()
  orderItems: OrderItem[];
}
