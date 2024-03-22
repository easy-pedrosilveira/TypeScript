import ILandVehicle from "./interfaces/ILandVehicle";

export default class MotorCycle implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("\nIniciando entrega...");
  }
  getCargo(): void {
    console.log("Estamos com o Pacote...");
  }
}
