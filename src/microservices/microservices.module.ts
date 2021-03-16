import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';

const Modules = [
  OrdersModule,
];

@Module({
  imports: [...Modules],
  exports: [...Modules],
})
export class MicroservicesModule {}
