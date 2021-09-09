import { Module } from '@nestjs/common';
import { OrdersMicroserviceModule } from './orders/orders.module';
import { PaymentsMicroserviceModule } from './payments/payments.module';
import { VideosMicroserviceModule } from './videos/videos.module';

const Modules = [
  OrdersMicroserviceModule,
  VideosMicroserviceModule,
  PaymentsMicroserviceModule
];

@Module({
  imports: [...Modules],
  exports: [...Modules]
})
export class MicroservicesModule {}
