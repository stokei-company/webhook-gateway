import { ClientsModule, Transport } from '@nestjs/microservices';
import { MICROSERVICE_URL } from '~/environments';
import { VIDEOS_SERVICE, VIDEOS_SERVICE_QUEUE } from './constants';

export const VideosClient = ClientsModule.register([
  {
    name: VIDEOS_SERVICE,
    transport: Transport.RMQ,
    options: {
      urls: [MICROSERVICE_URL],
      queue: VIDEOS_SERVICE_QUEUE,
      queueOptions: {
        durable: true
      }
    }
  }
]);
