import { Module } from '@nestjs/common';
import { OrdersClient } from './orders.client';
import { OrdersService } from './orders.service';

@Module({
  imports: [
    OrdersClient,
  ],
  providers: [
    OrdersService,
  ],
  exports: [
    OrdersService,
  ]
})
export class OrdersModule {}
