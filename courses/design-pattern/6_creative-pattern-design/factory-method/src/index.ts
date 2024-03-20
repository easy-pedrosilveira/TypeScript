import { CarTransport } from "./transport/CarTransport";
import { MotorCycleTransport } from "./transport/MotorCycleTransport";
import Transport from "./transport/Transport";

declare var process;

let transport: Transport;

if (process.argv.includes("--uber")) {
  
    transport = new CarTransport();
    transport.startTransport();

} else if (process.argv.includes("--log")) {
  
    transport = new MotorCycleTransport();
    transport.startTransport();
} else {
  console.error("Selecione o tipo de entrega.");
}
