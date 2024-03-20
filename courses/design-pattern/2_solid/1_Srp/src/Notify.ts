import Client from "./Client";

// função/responsabilidade da classe Notify é notificar o Usuário
export default class Notify {
  constructor(private client: Client) {}

  sendEmail(): boolean {
    console.log("Enviando email..");
    this.client.email;
    return true;
  }
}
