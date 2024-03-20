import Client from "./Client";
import Notify from "./Notify";

const cliente = new Client();
const notificacao = new Notify(cliente); // carregando a instancia da classe notificação, passando para quem é o cliente 

notificacao.sendEmail()
