import IVehicle from "./IVehicles";

export default interface IVehicleCar extends IVehicle {
  configurationCar(
    color: string,
    year: number,
    engine: number,
    seats: number
  ): void;
}
