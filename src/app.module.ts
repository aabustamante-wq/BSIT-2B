import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { CustomerModule } from './customer/customer.module';
import { RestaurantModule } from './restaurant/restaurant.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    AuthModule,
    CustomerModule,
    RestaurantModule,
  ],
})
export class AppModule {}