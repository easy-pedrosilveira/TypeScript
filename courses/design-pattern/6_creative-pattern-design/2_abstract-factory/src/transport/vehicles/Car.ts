import IVehicle from "./interfaces/IVehicles";

// os veiculos são dependentes de suas abstrações
export default class Car implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando o trajeto...");
  }
  getCargo(): void {
    console.log("Pegamos os Passageiros, estamos prontos!");
  }
}
