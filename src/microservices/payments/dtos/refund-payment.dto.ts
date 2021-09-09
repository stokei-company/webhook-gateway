import { BoletoDTO } from './boleto.dto';

export interface RefundPaymentDTO {
  readonly provider: string;
  readonly notificationCode: string;
  readonly transactionId: string;
  readonly boleto?: BoletoDTO;
}
