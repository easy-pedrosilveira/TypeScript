import IVehicle from "./IVehicles";
import IVehicleMotorCycle from "./IVihacleMotorCycle";

export default class MotorCycle implements IVehicleMotorCycle, IVehicle {
  constructor(color: string, year: number, engine: number) {
    this.configurationMotorCycle(color, year, engine);
  }
  startVehicle(): void {
    console.log("Ligando os motorres.");
  }

  configurationMotorCycle(color: string, year: number, engine: number): void {
    console.log(
      `Uma moto da cor ${color}, do ano ${year}, com ${engine} cilindradas`
    );
    this.startVehicle();
  }
}
