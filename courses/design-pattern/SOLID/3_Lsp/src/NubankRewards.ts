import IPaymentInstrument from "./IPaymentInstrument";
import NubankCard from "./NubankCard";
//ao inves de olhar para a classe abstrata eu olho diretamente para a interface

export default class NubankRewards implements IPaymentInstrument {
  //os métodos são os mesmo, porém as ações serão diferentes

  validate(): void {
    console.log("Verificar a pontuação no rewards");
  }
  collectPayment(): void {
    console.log("Pagar com a pontuação do rewards");
  }
}
