import Client from "./vehicles/client/Client";
import Company from "./vehicles/const/Company";
import NineNineTransport from "./vehicles/factories/NineNineTrasnport";
import UberTransport from "./vehicles/factories/UberTransport";
import ITransportFactory from "./vehicles/factories/interfaces/ITransportFactory";

const currentCompany = Company.NINENINE;
let factory: ITransportFactory;

switch (currentCompany) {
  
  case Company.UBER:
    factory = new UberTransport();
    break;

  case Company.NINENINE:
    factory = new NineNineTransport();
    break;
  default:
    console.error("CIA Desconhecida!");
}

const client = new Client(factory);

client.startRoute();
