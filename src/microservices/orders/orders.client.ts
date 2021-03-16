import { ClientsModule, Transport } from "@nestjs/microservices";
import { MICROSERVICE_URL } from "~/environments";
import { ORDERS_SERVICE, ORDERS_SERVICE_QUEUE } from "./constants";

export const OrdersClient = ClientsModule.register([
    {
        name: ORDERS_SERVICE,
        transport: Transport.RMQ,
        options: {
            urls: [MICROSERVICE_URL],
            queue: ORDERS_SERVICE_QUEUE,
            queueOptions: {
                durable: true
            },
        }
    },
]);