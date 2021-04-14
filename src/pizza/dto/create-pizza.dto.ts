import { IsString, IsNotEmpty, IsNumber, IsDefined } from 'class-validator';

export class CreatePizzaDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDefined()
  @IsNumber()
  price: number;

  @IsString({ each: true })
  ingredients: string[];
}
