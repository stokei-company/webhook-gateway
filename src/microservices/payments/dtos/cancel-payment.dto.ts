import { BoletoDTO } from './boleto.dto';

export interface CancelPaymentDTO {
  readonly provider: string;
  readonly notificationCode: string;
  readonly transactionId: string;
  readonly boleto?: BoletoDTO;
}
