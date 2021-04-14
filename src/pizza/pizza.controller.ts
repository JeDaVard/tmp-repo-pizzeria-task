import {
  Controller,
  Get,
  Post,
  Body,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { PizzaService } from './pizza.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';

@Controller('pizza')
export class PizzaController {
  constructor(private readonly pizzaService: PizzaService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createPizzaDto: CreatePizzaDto) {
    return this.pizzaService.create(createPizzaDto);
  }

  @Get()
  findAll() {
    return this.pizzaService.findAll();
  }
}
