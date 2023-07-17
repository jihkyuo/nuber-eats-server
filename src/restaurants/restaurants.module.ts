import { Module } from '@nestjs/common';
import { RestaurantsResolver } from './restaurants.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurants.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([ Restaurant ]) ],
  providers: [ RestaurantsResolver ],
})
export class RestaurantsModule {
}
