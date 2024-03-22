import IAircraft from "./interfaces/IAircraft";

export default class AirPlane implements IAircraft {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log("\nIniciando a decolagem...");
  }
  getCargo(): void {
    console.log("Pegamos os passageiros, estamos prontos...");
  }
  checkWind(): void {
    console.log("Ventos a 25km, ventos ok!");
  }
}
