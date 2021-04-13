import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Pizza } from './pizza.entity';

export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, type: 'varchar', length: 255 })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  /*
   * Relations
   */
  @ManyToOne(() => Pizza, (Pizza) => Pizza.ingredients, {
    eager: false,
  })
  pizza: Pizza;
}
