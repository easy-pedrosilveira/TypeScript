import Transport from "./Transport";
import IVehicle from "./vehicles/interfaces/IVehicles";
import Car from "./vehicles/Car";

export class CarTransport extends Transport {
  protected createTransport(): IVehicle {
    return new Car();
  }
}
