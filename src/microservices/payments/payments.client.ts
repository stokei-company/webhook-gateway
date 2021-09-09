import { ClientsModule, Transport } from '@nestjs/microservices';
import { MICROSERVICE_URL } from '~/environments';
import { PAYMENTS_SERVICE, PAYMENTS_SERVICE_QUEUE } from './constants';

export const PaymentsClient = ClientsModule.register([
  {
    name: PAYMENTS_SERVICE,
    transport: Transport.RMQ,
    options: {
      urls: [MICROSERVICE_URL],
      queue: PAYMENTS_SERVICE_QUEUE,
      queueOptions: {
        durable: true
      }
    }
  }
]);
