export default interface IVehicleMotorCycle {
  startVehicle(): void;
  configure(
    color: string,
    year: number,
    engine: number,
  ): void;
}
