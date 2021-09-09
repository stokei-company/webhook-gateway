export interface BoletoDTO {
  readonly url: string;
}
export interface CreditCardDTO {
  readonly lastFourNumbers: string;
  readonly brand: string;
}

export interface UpdatePaymentDTO {
  readonly paymentId: string;
  readonly boleto?: BoletoDTO;
  readonly creditCard?: CreditCardDTO;
}
