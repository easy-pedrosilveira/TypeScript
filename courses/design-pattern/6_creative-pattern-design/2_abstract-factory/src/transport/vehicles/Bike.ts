import IVehicles from "./interfaces/IVehicles";

export default class Bike implements IVehicles {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando a entrega...");
  }
  getCargo(): void {
    console.log("Pegamos o alimento...");
  }
}
