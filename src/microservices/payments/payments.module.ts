import { Module } from '@nestjs/common';
import { PaymentsClient } from './payments.client';
import { PaymentsMicroserviceService } from './payments.service';

@Module({
  imports: [PaymentsClient],
  providers: [PaymentsMicroserviceService],
  exports: [PaymentsMicroserviceService]
})
export class PaymentsMicroserviceModule {}
