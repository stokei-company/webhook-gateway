import { BoletoDTO } from './boleto.dto';

export interface ApprovePaymentDTO {
  readonly provider: string;
  readonly notificationCode: string;
  readonly transactionId: string;
  readonly boleto?: BoletoDTO;
}
