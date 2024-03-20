# SRP - Single Responsibility Principle - SRP

// função/responsabilidade da classe Client é fazer o CRUD

# Criando um classe que vai ser responsavel pelo CRUD

export default class Client {
email: string;
create(): void {}
read(): void {}
update(): void {}
delete(): void {}

`não pode ser responsavel por enviar emails, pois isso traz mais de uma responsabilidade para ela `
//isso fere pois acresenta mais de uma responsablidade para a Classe
// sendEmail(): boolean {
// return true;
// }
}

nunca deve haver mais de um motivo para uma classe mudar, cada uma das classes tem um objetivo único
