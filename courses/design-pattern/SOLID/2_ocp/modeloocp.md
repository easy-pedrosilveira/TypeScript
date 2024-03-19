# Open/Closed Principle

`Princípio Aberto/Fechado OCP - Aberto para extensão e Fechado para modificação.`

alterar códgos existentes é perigoso

    Classe A `está fechada para modificações, porém ela está abertar para extensões`

Classe B Classe C

caso precise alterar crie uma "classe D" vai ser completamente diferente da Classe A, porém sem quebrar o principio, caso não faça isso, pode resultar em um `efeito colateral ->`

Obeserve esse exemplo:

##
criei um enum para o tipo de veiculo que eu posso ter
import TypeVehicle from "./TypeVehicles"; -  {

enum TypeVehicle {
CAR,
MOTORCYCLE
}

export default TypeVehicle

## }

##

criando a classe e seus argumentos
import Vehicle from "./vehicles/Vehicle";{

    export default class Vehicle {

constructor(
private color: string,
private year: number,
private engine: number,
private seats: number,
private doors: number
) {}

car(): void {
console.log(
`Criando um carro: ${this.color}, ${this.year}, ${this.engine} potência, ${this.doors} portas com ${this.seats} assentos`
);

    this.startVehicle();

}

motorcycle(): void {
console.log(
`Criando uma moto:  ${this.color}, ${this.year}, ${this.engine} cilindradas.`
);

    this.startVehicle();

}

startVehicle(): void {
console.log("Ligando os motores.");
}
}

}

##

e no momento que eu pego para instanciar essa classe com o tipo de veiculo que eu quero, irá me retorna um erro, pois eu estou modificando a minha classe, deixando de passar os atributos na moto pois a mesma não precisa receber todos

const type = TypeVehicle.CAR;

let vehicle;

if (type === TypeVehicle.CAR) {
vehicle = new Vehicle("Amarelo", 2022, 2.0, 4, 4);
vehicle.car();
} else if (type === TypeVehicle.MOTORCYCLE) {
vehicle = new Vehicle("Amarelo", 2022, 2.0); `não passei todos os argumentos esperados`
vehicle.motorcycle();
}

## Para resolver isso

crie uma interface a ser seguida
IVehicleCar && e IVehicleMotorCycle `cada um passou a ter sua singularidade`

crie sua classe implementando a interface a ser seguida
class Car implements IVehicleCar {}
class MotorCycle implements IVehicleMotorCycle {}

podendo retirar o método que estava especificando, pois o construtor já está chamando os configures que está instanciando o startVehicle()
vehicle.car();
vehicle.motorcycle();

o resultado continua o mesmo, porém a estrutura está seguindo os principios

agora está aberto para criar mais um tipo de veiculo, só precisa criar mais uma interface, a classe e uma condicional, não alterando o que já estava feito e abrindo a possibilidade de expansão

## um código mais organizado e menos sucetivel a erros.
