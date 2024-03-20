import IVehicle from "./vehicles/interfaces/IVehicles";

export default abstract class Transport {
  
  startTransport(): void {

    let vehicle = this.createTransport();
    vehicle.startRoute(); //pegou da interface IVehicle
  
  }
  
  protected abstract createTransport(): IVehicle;

}
