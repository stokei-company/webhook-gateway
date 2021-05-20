import { Module } from '@nestjs/common';
import { OrdersMicroserviceModule } from './orders/orders.module';
import { VideosMicroserviceModule } from './videos/videos.module';

const Modules = [
  OrdersMicroserviceModule,
  VideosMicroserviceModule,
];

@Module({
  imports: [...Modules],
  exports: [...Modules],
})
export class MicroservicesModule {}
