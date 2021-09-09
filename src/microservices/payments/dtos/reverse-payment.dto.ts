import { BoletoDTO } from './boleto.dto';

export interface ReversePaymentDTO {
  readonly provider: string;
  readonly notificationCode: string;
  readonly transactionId: string;
  readonly boleto?: BoletoDTO;
}
