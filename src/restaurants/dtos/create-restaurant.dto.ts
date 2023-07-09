import { ArgsType, Field } from '@nestjs/graphql';
import { Restaurant } from '../entities/restaurants.entity';
import { IsBoolean, IsString, Length } from 'class-validator';

@ArgsType()
export class CreateRestaurantDto implements Restaurant {
  @Field(type => String)
  @IsString()
  address: string;

  @Field(type => Boolean)
  @IsBoolean()
  isVegan: boolean;

  @Field(type => String)
  @IsString()
  @Length(5, 10)
  name: string;

  @Field(type => String)
  @IsString()
  ownerName: string;
}