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
			const video = await this.videosService.findByFilename(data.filename);
			if(!video){
				throw new Error("Video not found!");
			}
			
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

			const videos = new Array(data.videos);
			const sizes = videos
				.map(video => video.meta.height ? "" + (video.meta.height) : null)
				.filter(item => item !== null);
			const volume = data.source_size;
			const duration = data.duration;

			return {
				ok: await this.videosService.update({
					id: video && video.id,
					status,
					volume,
					duration,
					sizes,
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
