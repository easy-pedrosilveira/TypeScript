import TypeVehicle from "./TypeVehicles";
//import Vehicle from "./vehicles/Vehicle"; // agora ao inves de chamar a classe Vehicle que estava acoplamando diversas responsabilidades 
import Car from "./vehicles/Car"; // chame a classe carro
import MotorCycle from "./vehicles/MotorCycle"; // chame a classe carro

const type = TypeVehicle.CAR;
let vehicle;

if (type === TypeVehicle.CAR) {
  vehicle = new Car("Amarelo", 2022, 2.0, 4, 4);
} else if (type === TypeVehicle.MOTORCYCLE) { 
  vehicle = new MotorCycle("Amarelo", 2022, 2.0); // a classe por já ter um modelo a ser seguido não espera mais dois atributos
}
