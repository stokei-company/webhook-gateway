import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ServiceMicroservice } from '~/shared/abstracts/service.microservice';
import { PAYMENTS_PATTERN_NAME, PAYMENTS_SERVICE } from './constants';
import { ApprovePaymentDTO } from './dtos/approve-payment.dto';
import { CancelPaymentDTO } from './dtos/cancel-payment.dto';
import { RefundPaymentDTO } from './dtos/refund-payment.dto';
import { ReversePaymentDTO } from './dtos/reverse-payment.dto';
import { UpdatePaymentDTO } from './dtos/update-payment.dto';

@Injectable()
export class PaymentsMicroserviceService extends ServiceMicroservice {
  constructor(
    @Inject(PAYMENTS_SERVICE)
    client: ClientProxy
  ) {
    super({
      client,
      prefixPatternName: PAYMENTS_PATTERN_NAME
    });
  }

  async approve(data: ApprovePaymentDTO) {
    return await this.emit(this.createPatternName('approve'), data);
  }

  async cancel(data: CancelPaymentDTO) {
    return await this.emit(this.createPatternName('cancel'), data);
  }

  async refund(data: RefundPaymentDTO) {
    return await this.emit(this.createPatternName('refund'), data);
  }

  async reverse(data: ReversePaymentDTO) {
    return await this.emit(this.createPatternName('reverse'), data);
  }

  async update(data: UpdatePaymentDTO) {
    return await this.emit(this.createPatternName('update'), data);
  }
}
