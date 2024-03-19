import IVehicleMotorCycle from "./IVehicleMotorCycle";

export default class MotorCycle implements IVehicleMotorCycle {
  constructor(color: string, year: number, engine: number) {
    this.configure(color, year, engine); //passando cada um dos atributos
  }
  startVehicle(): void {
    console.log("Ligando os motores.");
  }
  configure(color: string, year: number, engine: number): void {
    console.log(`Criando uma moto:  ${color}, ${year}, ${engine} cilindradas.`);
    this.startVehicle();
  }
}
