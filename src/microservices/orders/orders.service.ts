import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ServiceMicroservice } from '~/shared/abstracts/service.microservice';
import { ORDERS_PATTERN_NAME, ORDERS_SERVICE } from './constants';
import { ApproveOrderDTO } from './dtos/approve-order.dto';
import { CancelOrderDTO } from './dtos/cancel-order.dto';

@Injectable()
export class OrdersMicroserviceService extends ServiceMicroservice {
    constructor(
        @Inject(ORDERS_SERVICE)
        client: ClientProxy
    ) {
        super({
            client,
            prefixPatternName: ORDERS_PATTERN_NAME
        });
    }

    async approve(data: ApproveOrderDTO) {
        return await this.emit(this.createPatternName('approve'), data);
    }

    async cancel(data: CancelOrderDTO) {
        return await this.emit(this.createPatternName('cancel'), data);
    }
}
