export class ChangePaymentStatusDTO {
  readonly transaction?: any;
  readonly paymentId: string;
  readonly provider: string;
  readonly notificationCode: string;
  readonly status?: string;
}
