import IVehicle from "./interfaces/IVehicles";

// os veiculos são dependentes de suas abstrações
export default class MotorCycle implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando a entrega...");
  }
  getCargo(): void {
    console.log("Já pegamos a encomenda!");
  }
}
