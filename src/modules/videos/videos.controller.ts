import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { VideosService } from './videos.service';

@Controller('videos')
export class VideosController {
	constructor(private readonly videosService: VideosService) { }

	@Post('status')
	changeStatus(
		@Query() params: any,
		@Body() body: any
	) {
		try {
			const queryParams = params || {};
			const bodyParams = body || {};

			let status;
			if(bodyParams && bodyParams.status && bodyParams.status.status){
				status = bodyParams.status.status;
			}
			return this.videosService.changeStatus({
				...queryParams,
				...bodyParams,
				videoId: queryParams.videoId,
				status
			});
		} catch (error) { }
	}
}
