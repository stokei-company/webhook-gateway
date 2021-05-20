import { Injectable } from '@nestjs/common';
import { VideoStatus } from '~/microservices/videos/enums/video-status.enum';
import { VideosMicroserviceService } from '~/microservices/videos/videos.service';

@Injectable()
export class VideosService {
	constructor(
		private readonly videosService: VideosMicroserviceService,
	) { }

	async changeStatus(data: any) {
		try {
			let status = data.status;
			/*
				downloading ->	Video is being downloaded to Qencode server.
				queued 		->	Task is waiting for available encoders.
				encoding 	->	Video is being transcoded.
				saving 		->	Video is being saved to destination location.
				completed 	->	The transcoding job has completed successfully and the videos were saved to the destination.
			*/
			const statusResponse = {
				downloading: VideoStatus.PENDING,
				queued: VideoStatus.PENDING,
				encoding: VideoStatus.ENCODING,
				saving: VideoStatus.SAVING,
				completed: VideoStatus.AVAILABLE,
			};
			status = statusResponse[status];
			const video = await this.videosService.findByFilename(data.filename);
			return {
				ok: await this.videosService.update({
					id: video && video.id,
					status,
				}),
				status,
			};
		} catch (error) {
			return {
				ok: false,
				error,
			};
		}
	}
}
