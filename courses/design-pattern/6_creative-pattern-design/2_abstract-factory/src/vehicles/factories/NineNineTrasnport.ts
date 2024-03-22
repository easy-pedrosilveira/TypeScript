import Helicopter from "../aerial/Helicopter";
import IAircraft from "../aerial/interfaces/IAircraft";
import MotorCycle from "../land/MotoCycle";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class NineNineTransport implements ITransportFactory {
  createTransportVehicle(): ILandVehicle {
    return new MotorCycle();
  }
  createTransportAircraft(): IAircraft {
    return new Helicopter();
  }
}
