import { EntityRepository, Repository } from 'typeorm';
import { Pizza } from './entities/pizza.entity';

@EntityRepository(Pizza)
export class PizzaRepository extends Repository<Pizza> {}
