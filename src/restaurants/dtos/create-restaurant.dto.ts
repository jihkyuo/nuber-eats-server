import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { Restaurant } from '../entities/restaurants.entity';

@ArgsType()
export class CreateRestaurantDto implements Restaurant {
  @Field(type => String)
  address: string;

  @Field(type => Boolean)
  isVegan: boolean;

  @Field(type => String)
  name: string;

  @Field(type => String)
  ownerName: string;
}