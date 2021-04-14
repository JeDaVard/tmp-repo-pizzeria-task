import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  Entity,
  BaseEntity,
} from 'typeorm';
import { Pizza } from './pizza.entity';

@Entity('ingredients')
export class Ingredient extends BaseEntity {
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
