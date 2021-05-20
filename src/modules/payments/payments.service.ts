import { Injectable } from '@nestjs/common';
import { OrdersMicroserviceService } from '~/microservices/orders/orders.service';
import { ChangePaymentStatusDTO } from './dto/change-payment-status.dto';

@Injectable()
export class PaymentsService {
	constructor(
		private readonly ordersService: OrdersMicroserviceService,
	) { }

	async changeStatus(data: ChangePaymentStatusDTO) {
		const successStatus = ["paid"];
		const cancelStatus = ["refunded", "refused", "chargedback"];
		let approve = false;
		let cancel = false;
		try {
			approve = successStatus.includes(data.status);
			cancel = cancelStatus.includes(data.status);
			const paymentData = {
				provider: data.provider,
				secretCode: data.secretCode,
			};
			if (approve) {
				await this.ordersService.approve({
					orderId: data.orderId,
					payment: paymentData, 
				});
			} else if (cancel) {
				await this.ordersService.cancel({
					orderId: data.orderId,
					payment: paymentData,
				});
			}
		} catch (error) { }
		return {
			approve,
			cancel,
		};
	}
}
