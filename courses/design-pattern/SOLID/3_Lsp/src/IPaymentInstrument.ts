// uma interface -> um contrato/exigência a ser seguida

export default interface IPaymentInstrument {
  validate(): void;
  collectPayment(): void;
}
