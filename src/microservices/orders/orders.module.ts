import { Module } from '@nestjs/common';
import { OrdersClient } from './orders.client';
import { OrdersMicroserviceService } from './orders.service';

@Module({
  imports: [OrdersClient],
  providers: [OrdersMicroserviceService],
  exports: [OrdersMicroserviceService]
})
export class OrdersMicroserviceModule {}
