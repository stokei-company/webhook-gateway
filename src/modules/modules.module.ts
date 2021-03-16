import { Module } from '@nestjs/common';
import { MicroservicesModule } from '~/microservices/microservices.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    MicroservicesModule,
    PaymentsModule,
  ]
})
export class ModulesModule {}
