export class ChangePaymentStatusDTO {
  readonly orderId: string;
  readonly provider: string;
  readonly secretCode: string;
  readonly token: string;
  readonly status?: string;
}
