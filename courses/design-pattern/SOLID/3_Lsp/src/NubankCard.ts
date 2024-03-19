import IPaymentInstrument from "./IPaymentInstrument"; //implementando os métodos da classe PAI

export default abstract class NubankCard implements IPaymentInstrument {
  //abstract -> não posso criar uma instância dessa classe, parece a interface porém é possivel colcoar alguns conteúdos diferente da interface mas eu não posso instancealos
  //todo o esqueleto o que compões um cartão vai estar dentro dessa abstração, e o que difere são as classes que vão usar essa abstração como modelo

  validate(): void {
    console.log("Validação básica.");
  }
  collectPayment(): void {
    console.log("Pagamento realizado.");
  }
}
