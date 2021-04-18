import { Module } from '@nestjs/common';
import { MicroservicesModule } from '~/microservices/microservices.module';
import { PaymentsModule } from './payments/payments.module';
import { VideosModule } from './videos/videos.module';

@Module({
  imports: [
    MicroservicesModule,
    PaymentsModule,
    VideosModule,
  ]
})
export class ModulesModule {}
