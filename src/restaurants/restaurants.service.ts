import { Injectable } from '@nestjs/common';
import { Restaurant } from './entities/restaurants.entity';

@Injectable()
export class RestaurantService {

  getAll(): Restaurant[] {
    return [];
  }
}