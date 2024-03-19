# Interface Segrefation Principle

` Princípio da Segregação de Interfaces ISP - Classes não devem ser forçadas a depender de métodos que não usam.`

Segregação = separação de interfaces
Quebrar uma interface massiva em menores( voltando a ter responsabilida única(SRP) )
Quase um SRP só que direcionado a classes abstratas e interfaces

o que por padrão um veiculo tem
export default interface IVehicle {
startVehicle(): void;
}

e divido com base as necessidades apresentadas pelos veiculos

---

primeira forma de fazer:
import IVehicle from "./IVehicles";

export default interface IVehicleCar `extends IVehicle (extende a interface e pode usar o starVehicle())` {
configurationCar(
color: string,
year: number,
engine: number,
seats: number
): void;
}

---

cria a interface

export default interface IVehicleMotorCycle {
configurationMotorCycle(color: string, year: number, engine: number): void;
}
e na classe implementa

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

---
