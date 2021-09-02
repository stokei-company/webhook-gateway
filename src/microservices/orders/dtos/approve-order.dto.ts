export interface Payment {
  readonly id?: string;
  readonly token?: string;
  readonly type?: string;
  readonly provider?: string;
}

export interface ApproveOrderDTO {
  readonly orderId: string;
  readonly payment?: Payment;
}
