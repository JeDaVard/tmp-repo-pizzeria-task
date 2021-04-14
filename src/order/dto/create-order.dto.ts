import { OrderItemDto } from './order-item.dto';
import { Type } from 'class-transformer';
import { IsDefined } from 'class-validator';

export class CreateOrderDto {
  @IsDefined()
  @Type(() => OrderItemDto)
  items: OrderItemDto[];
}
