import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
	constructor(private readonly paymentsService: PaymentsService) { }

	@Post('status')
	changeStatus(
		@Query() params: any,
		@Body() body: any
	) {
		try {
			const queryParams = params || {};
			const bodyParams = body || {};

			let status = bodyParams.current_status || bodyParams.status;
			return this.paymentsService.changeStatus({
				...queryParams,
				...bodyParams,
				status
			});
		} catch (error) { }
	}
}
