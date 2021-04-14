import { Injectable } from '@nestjs/common';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pizza } from './entities/pizza.entity';
import { PizzaRepository } from './pizza.repository';

@Injectable()
export class PizzaService {
  constructor(
    @InjectRepository(Pizza) private pizzaRepository: PizzaRepository,
  ) {}
  async create(createPizzaDto: CreatePizzaDto) {
    const pizza = this.pizzaRepository.create({
      name: createPizzaDto.name,
      price: createPizzaDto.price,
      ingredients: [...createPizzaDto.ingredients.map((i) => ({ name: i }))],
    });
    await pizza.save();
    return pizza;
  }

  async findAll() {
    return this.pizzaRepository.find();
  }
}
