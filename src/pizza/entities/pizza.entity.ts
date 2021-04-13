import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Ingredient } from './ingredient.entity';
import { OrderItem } from '../../order/entities/order-item.entity';

export class Pizza {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  /*
   * Relations
   */
  @OneToMany(() => Ingredient, (Ingredient) => Ingredient.pizza)
  ingredients: Ingredient[];

  @OneToMany(() => OrderItem, (OrderItem) => OrderItem.item, {
    eager: false,
  })
  orderItems: OrderItem[];
}
