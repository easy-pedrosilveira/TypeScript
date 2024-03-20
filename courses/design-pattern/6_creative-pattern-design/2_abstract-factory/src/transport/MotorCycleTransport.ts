import Transport from "./Transport";
import IVehicle from "./vehicles/interfaces/IVehicles";
import MotorCycle from "./vehicles/MotorCycle";

export class MotorCycleTransport extends Transport {
  protected createTransport(): IVehicle {
    return new MotorCycle();
  }
}
