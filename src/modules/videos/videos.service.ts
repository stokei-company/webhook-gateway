import { Injectable } from '@nestjs/common';

@Injectable()
export class VideosService {
	constructor(
		//private readonly videosService: OrdersService,
	) { }

	async changeStatus(data: any) {
		try {
			/*
				downloading ->	Video is being downloaded to Qencode server.
				queued 		->	Task is waiting for available encoders.
				encoding 	->	Video is being transcoded.
				saving 		->	Video is being saved to destination location.
				completed 	->	The transcoding job has completed successfully and the videos were saved to the destination.
			*/
			return {
				ok: true,
				status: data.status,
			};
		} catch (error) {
			return {
				ok: false,
				error,
			};
		}
	}
}
